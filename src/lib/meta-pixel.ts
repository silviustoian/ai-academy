/// <reference types="react" />

// Meta Pixel + Conversions API helpers.
// Client-side pixel + server CAPI use the SAME event_id so Meta dedupes.

type PixelEventOptions = {
  eventID?: string;
};

type PixelEventName = "PageView" | "Lead" | "ViewContent" | "CompleteRegistration";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Fbq = ((command: "init", pixelId: string) => void) &
  ((
    command: "track",
    eventName: PixelEventName,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params?: Record<string, any>,
    options?: PixelEventOptions,
  ) => void) &
  ((command: "consent", state: "grant" | "revoke") => void);

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

export function generateEventId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `evt_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

export function trackLeadClient(eventId: string) {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq(
    "track",
    "Lead",
    {
      content_name: "NEXINARI apply",
      content_category: "application",
    },
    { eventID: eventId },
  );
}

export async function trackLeadServer(payload: {
  eventId: string;
  email?: string;
  phone?: string;
  city?: string;
  clientUserAgent?: string;
}) {
  try {
    await fetch("/api/capi/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    });
  } catch (err) {
    // Fire-and-forget: even if this fails, client pixel already fired.
    console.warn("CAPI lead failed:", err);
  }
}
