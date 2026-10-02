"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Analytics } from "@/components/Analytics";
import { cn } from "@/lib/utils";

type Consent = "accepted" | "declined" | null;

const STORAGE_KEY = "cookie-consent";

function readConsent(): Consent {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "accepted" || stored === "declined" ? stored : null;
  } catch {
    return null;
  }
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getServerSnapshot(): Consent {
  return null;
}

export function CookieConsent() {
  // Reads the persisted choice safely across server/client (no hydration
  // mismatch) — see https://react.dev/reference/react/useSyncExternalStore.
  const persisted = useSyncExternalStore(subscribe, readConsent, getServerSnapshot);
  // Reflects a choice made THIS session immediately, without waiting on the
  // storage event (which only fires in *other* tabs, not the one that wrote it).
  const [chosen, setChosen] = useState<Consent>(null);
  const consent = chosen ?? persisted;
  const hasPageShell = usePathname() === "/";

  function choose(value: "accepted" | "declined") {
    setChosen(value);
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // Ignore — the choice still applies for this page view.
    }
  }

  return (
    <>
      {consent === "accepted" && <Analytics />}

      {consent === null && (
        <div
          role="dialog"
          aria-label="Aviso de cookies"
          className={cn(
            "fixed inset-x-4 z-40 rounded-2xl border border-border bg-bg-secondary p-5 shadow-2xl lg:inset-x-auto lg:bottom-8 lg:flex lg:max-w-3xl lg:-translate-x-1/2 lg:items-center lg:gap-6",
            // Home: sits above the mobile icon dock and, on desktop, is centered in the
            // content column between the 320px sidebar and the 96px dock (page shell is
            // max 1440px wide). Other pages have no sidebar/dock: plain centering.
            hasPageShell
              ? "bottom-24 lg:left-[calc(50%_+_112px)] lg:w-[calc(min(100vw,1440px)_-_416px_-_4rem)]"
              : "bottom-4 lg:left-1/2 lg:w-[calc(100%_-_4rem)]"
          )}
        >
          <p className="text-sm leading-relaxed text-text-secondary lg:flex-1">
            Este site usa cookies de análise para entender como os visitantes o utilizam. Você pode
            aceitar ou recusar — a navegação funciona normalmente de qualquer forma. Saiba mais na{" "}
            <Link href="/politica-de-privacidade" className="text-accent underline hover:no-underline">
              Política de Privacidade
            </Link>
            .
          </p>
          <div className="mt-4 flex shrink-0 items-center gap-3 lg:mt-0">
            <button
              type="button"
              onClick={() => choose("accepted")}
              className="rounded-full bg-accent px-4 py-2 font-heading text-sm font-medium text-bg transition-colors hover:bg-accent/90"
            >
              Aceitar
            </button>
            <button
              type="button"
              onClick={() => choose("declined")}
              className="rounded-full border border-border px-4 py-2 font-heading text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
            >
              Recusar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
