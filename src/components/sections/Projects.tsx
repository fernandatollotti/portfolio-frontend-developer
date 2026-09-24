import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { projectDomId } from "@/lib/utils";

export function Projects() {
  return (
    <section
      id="projetos"
      aria-labelledby="projetos-heading"
      className="scroll-mt-24 border-b border-border py-20 sm:py-28"
    >
      <Reveal>
        <SectionTitle
          eyebrow="Trabalho selecionado"
          title="Projetos"
          description="Uma seleção de projetos recentes — do front-end à experiência final entregue."
          headingId="projetos-heading"
        />
      </Reveal>

      <div className="flex flex-col gap-16 lg:gap-24">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 60}>
            <article
              id={projectDomId(project.id)}
              className="group grid scroll-mt-24 grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-10"
            >
              <a
                href={project.href ?? "#"}
                className="block overflow-hidden rounded-2xl border border-border bg-bg-secondary"
                aria-label={`Ver projeto ${project.name}`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element -- static local SVG, no optimization needed */}
                  <img
                    src={project.image}
                    alt={`Prévia do projeto ${project.name}`}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </a>

              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                  {project.category} · {project.year}
                </p>
                <h3 className="mt-2 font-heading text-2xl font-semibold text-text">
                  {project.name}
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-text-secondary">
                  {project.description}
                </p>

                <a
                  href={project.href ?? "#"}
                  className="mt-5 inline-flex items-center gap-1 font-heading text-sm font-medium text-text transition-colors hover:text-accent"
                >
                  Ver projeto
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
