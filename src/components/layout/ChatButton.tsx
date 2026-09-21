"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Mail, ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";

export function ChatButton() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <div className="fixed right-5 bottom-5 z-50 sm:right-8 sm:bottom-8">
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Contato rápido"
          className="absolute right-0 bottom-16 w-72 rounded-2xl border border-border bg-bg-secondary p-5 shadow-2xl"
        >
          <p className="font-heading text-sm font-semibold text-text">Vamos conversar?</p>
          <p className="mt-1 text-sm text-text-secondary">
            Responder o quanto antes é prioridade. Escolha a melhor forma de contato:
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-text transition-colors hover:border-accent hover:text-accent"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Enviar e-mail
            </a>
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-text transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
              Ir para o formulário
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Fechar contato rápido" : "Abrir contato rápido"}
        title="Vamos conversar?"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-accent text-bg shadow-lg shadow-black/30 transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        {open ? (
          <X className="h-5 w-5" aria-hidden="true" />
        ) : (
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
