import Link from "next/link";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-2 py-10 pb-28 text-center text-xs text-text-muted lg:flex-row lg:justify-between lg:pb-10 lg:text-left">
      <p>
        © {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.
      </p>
      <Link href="/politica-de-privacidade" className="transition-colors hover:text-accent">
        Política de Privacidade
      </Link>
    </footer>
  );
}
