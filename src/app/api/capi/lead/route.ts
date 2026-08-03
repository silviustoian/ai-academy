import { createHash } from "node:crypto";
import { NextResponse } from "next/server";

// Meta Conversions API — server-side Lead event.
// Uses SHA-256 hashed user data + a shared event_id so Meta dedupes with the
// client-side Pixel event fired for the same submission.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const CAPI_TOKEN = process.env.META_CAPI_ACCESS_TOKEN;
const CAPI_TEST_CODE = process.env.META_CAPI_TEST_CODE; // optional, dev-only

type LeadPayload = {
  eventId?: string;
  email?: string;
  phone?: string;
  city?: string;
  clientUserAgent?: string;
};

function sha256(v: string) {
  return createHash("sha256").update(v.trim().toLowerCase()).digest("hex");
}

function normPhone(phone: string) {
  // E.164-ish: strip non-digits, then hash. Meta expects the number only
  // (no plus), country code included.
  return phone.replace(/[^\d]/g, "");
}

export async function POST(request: Request) {
  if (!PIXEL_ID || !CAPI_TOKEN) {
    return NextResponse.json(
      { ok: false, error: "Meta CAPI env vars missing" },
      { status: 500 },
    );
  }

  let body: LeadPayload;
  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const userData: Record<string, string | string[]> = {};
  if (body.email) userData.em = sha256(body.email);
  if (body.phone) userData.ph = sha256(normPhone(body.phone));
  if (body.city) userData.ct = sha256(body.city);

  // Best-effort IP + UA — Meta uses them for match quality.
  const forwardedFor = request.headers.get("x-forwarded-for");
  const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : null;
  if (clientIp) userData.client_ip_address = clientIp;
  if (body.clientUserAgent) userData.client_user_agent = body.clientUserAgent;

  const eventTime = Math.floor(Date.now() / 1000);

  const eventPayload = {
    data: [
      {
        event_name: "Lead",
        event_time: eventTime,
        event_id: body.eventId ?? `evt_${eventTime}`,
        action_source: "website",
        event_source_url: request.headers.get("referer") ?? undefined,
        user_data: userData,
      },
    ],
    ...(CAPI_TEST_CODE ? { test_event_code: CAPI_TEST_CODE } : {}),
  };

  const url = `https://graph.facebook.com/v20.0/${PIXEL_ID}/events?access_token=${encodeURIComponent(CAPI_TOKEN)}`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventPayload),
    });
    const text = await res.text();

    if (!res.ok) {
      console.error("[capi] Meta returned non-2xx", {
        status: res.status,
        preview: text.slice(0, 400),
      });
      return NextResponse.json(
        { ok: false, error: `Meta CAPI ${res.status}`, detail: text.slice(0, 300) },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[capi] fetch threw", err);
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : String(err) },
      { status: 502 },
    );
  }
}
