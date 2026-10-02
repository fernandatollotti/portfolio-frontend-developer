import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

export default function NotFound() {
  return (
    <main id="main-content" className="flex min-h-screen flex-col">
      <Container className="flex max-w-3xl flex-1 flex-col items-center justify-center py-16 text-center">
        <p className="font-heading text-xs font-semibold tracking-[0.25em] text-accent uppercase">
          Erro 404
        </p>

        <p
          aria-hidden="true"
          className="mt-4 bg-gradient-to-b from-accent to-accent/10 bg-clip-text font-heading text-[7rem] leading-none font-semibold tracking-tight text-transparent sm:text-[10rem]"
        >
          404
        </p>

        <h1 className="mt-6 font-heading text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          Página não encontrada
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
          O endereço que você tentou acessar não existe ou foi movido. Volte para o início ou
          confira os projetos.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Voltar para o início
          </Button>
          <Button href="/#projetos" variant="secondary">
            Ver projetos
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </main>
  );
}
