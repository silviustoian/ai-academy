"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type ConsentStatus = "unknown" | "granted" | "denied";

type CookieConsentValue = {
  status: ConsentStatus;
  grant: () => void;
  deny: () => void;
  reset: () => void;
};

const STORAGE_KEY = "nexinari.cookieConsent";

const CookieConsentContext = createContext<CookieConsentValue | null>(null);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<ConsentStatus>("unknown");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "granted" || stored === "denied") {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setStatus(stored);
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  const grant = useCallback(() => {
    setStatus("granted");
    try {
      window.localStorage.setItem(STORAGE_KEY, "granted");
    } catch {
      /* ignore */
    }
  }, []);

  const deny = useCallback(() => {
    setStatus("denied");
    try {
      window.localStorage.setItem(STORAGE_KEY, "denied");
    } catch {
      /* ignore */
    }
  }, []);

  const reset = useCallback(() => {
    setStatus("unknown");
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <CookieConsentContext.Provider value={{ status, grant, deny, reset }}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error(
      "useCookieConsent must be used inside a CookieConsentProvider",
    );
  }
  return ctx;
}
