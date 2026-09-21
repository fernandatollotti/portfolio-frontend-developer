import { Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";

export function Contact() {
  return (
    <section id="contato" aria-labelledby="contato-heading" className="scroll-mt-24 py-20 sm:py-28">
      <Reveal>
        <p className="mb-3 font-heading text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          Contato
        </p>
        <h2
          id="contato-heading"
          className="max-w-xl font-heading text-3xl font-semibold tracking-tight text-text sm:text-4xl"
        >
          Vamos trabalhar juntos?
        </h2>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-text-secondary">
          Envie uma mensagem contando um pouco sobre o projeto, ou entre em contato diretamente
          pelos canais abaixo.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <Reveal delay={80}>
          <div className="flex flex-col gap-6">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-3 font-heading text-lg text-text transition-colors hover:text-accent"
            >
              <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
              {profile.email}
            </a>

            <div className="flex items-center gap-3">
              {profile.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-accent hover:text-accent"
                >
                  <SocialIcon icon={social.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
