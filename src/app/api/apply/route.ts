import { NextResponse } from "next/server";

// Forwards form submissions to the Google Apps Script Web App configured via
// SHEET_WEBHOOK_URL. Keeps the Sheet endpoint out of the client bundle and gives
// us a place to add validation, honeypot, Resend, Meta CAPI later.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ApplyPayload = Record<string, unknown>;

export async function POST(request: Request) {
  const webhookUrl = process.env.SHEET_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { ok: false, error: "SHEET_WEBHOOK_URL not configured" },
      { status: 500 },
    );
  }

  let body: ApplyPayload;
  try {
    body = (await request.json()) as ApplyPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  // Honeypot: reject if hidden "company" field is filled (bots often auto-fill everything)
  if (typeof body.company === "string" && body.company.trim().length > 0) {
    return NextResponse.json({ ok: true }); // silently accept but do nothing
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      redirect: "follow",
    });

    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: `Sheet webhook failed: ${res.status}` },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : String(err) },
      { status: 502 },
    );
  }
}
