import { profile } from "@/data/profile";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function MobileMenu() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-border bg-bg/90 px-6 py-4 backdrop-blur lg:hidden">
      <a href="#home" className="font-heading text-base font-semibold text-text">
        {profile.name}
      </a>

      <nav aria-label="Redes sociais" className="flex items-center gap-2">
        {profile.socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={social.label}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-accent hover:text-accent"
          >
            <SocialIcon icon={social.icon} className="h-4 w-4" />
          </a>
        ))}
      </nav>
    </header>
  );
}
