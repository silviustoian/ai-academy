import { NextResponse } from "next/server";

// Forwards form submissions to the Google Apps Script Web App configured via
// SHEET_WEBHOOK_URL. Uses text/plain content-type because Apps Script parses
// e.postData.contents as a raw string regardless of type, and this pairing
// avoids preflight/redirect edge cases some fetch impls hit on POST-302.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ApplyPayload = Record<string, unknown>;

export async function POST(request: Request) {
  const webhookUrl = process.env.SHEET_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("[apply] SHEET_WEBHOOK_URL is not set");
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

  // Honeypot: bots often fill hidden fields; silently accept.
  if (typeof body.company === "string" && body.company.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const payload = JSON.stringify(body);

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: payload,
      redirect: "follow",
    });

    const text = await res.text();

    if (!res.ok) {
      console.error("[apply] sheet non-2xx", {
        status: res.status,
        preview: text.slice(0, 300),
      });
      return NextResponse.json(
        {
          ok: false,
          error: `Sheet responded ${res.status}`,
          detail: text.slice(0, 300),
        },
        { status: 502 },
      );
    }

    // Apps Script returns JSON like { ok: true } or { ok: false, error: "..." }
    try {
      const parsed = JSON.parse(text) as { ok?: boolean; error?: string };
      if (parsed && parsed.ok === false) {
        console.error("[apply] sheet returned failure", parsed);
        return NextResponse.json(
          { ok: false, error: parsed.error ?? "Sheet returned failure" },
          { status: 502 },
        );
      }
    } catch {
      // Response wasn't JSON — Apps Script sometimes returns an HTML success page
      // after the redirect. If status was 2xx, treat as success.
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[apply] fetch threw", err);
    return NextResponse.json(
      {
        ok: false,
        error: err instanceof Error ? err.message : String(err),
      },
      { status: 502 },
    );
  }
}
