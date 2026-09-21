import { clients } from "@/data/clients";
import { Reveal } from "@/components/ui/Reveal";

export function Clients() {
  return (
    <section
      id="clientes"
      aria-labelledby="clientes-heading"
      className="scroll-mt-24 border-b border-border py-16"
    >
      <h2 id="clientes-heading" className="sr-only">
        Clientes
      </h2>
      <Reveal>
        <p className="mb-8 text-xs font-semibold tracking-[0.2em] text-text-muted uppercase">
          Empresas e clientes atendidos
        </p>
      </Reveal>
      <ul className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
        {clients.map((client, index) => (
          <Reveal key={client.id} as="li" delay={index * 60}>
            <div className="group flex flex-col gap-1">
              <span className="font-heading text-lg font-medium text-text-secondary transition-colors group-hover:text-accent">
                {client.name}
              </span>
              {client.projectsCount && (
                <span className="text-xs text-text-muted">
                  {client.projectsCount} {client.projectsCount === 1 ? "projeto" : "projetos"}
                </span>
              )}
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
