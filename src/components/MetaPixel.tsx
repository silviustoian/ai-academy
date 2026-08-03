"use client";

import Script from "next/script";
import { useEffect } from "react";

import { useCookieConsent } from "@/lib/cookie-consent";

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

// Injects the Meta Pixel base script and calls `consent grant/revoke` based on
// the cookie banner state. If PIXEL_ID isn't set (local dev without env), we
// render nothing.
export function MetaPixel() {
  const { status } = useCookieConsent();

  // When the user's consent changes AFTER the pixel has loaded, tell Meta.
  useEffect(() => {
    if (typeof window === "undefined" || !window.fbq) return;
    if (status === "granted") {
      window.fbq("consent", "grant");
    } else if (status === "denied") {
      window.fbq("consent", "revoke");
    }
  }, [status]);

  if (!PIXEL_ID) return null;

  return (
    <>
      <Script id="meta-pixel-base" strategy="afterInteractive">
        {`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('consent', '${status === "granted" ? "grant" : "revoke"}');
fbq('init', '${PIXEL_ID}');
fbq('track', 'PageView');
`}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
