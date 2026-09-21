import { cn } from "@/lib/utils";

export function SectionTitle({
  eyebrow,
  title,
  description,
  className,
  headingId,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  headingId?: string;
}) {
  return (
    <div className={cn("mb-12 max-w-2xl", className)}>
      {eyebrow && (
        <p className="mb-3 font-heading text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          {eyebrow}
        </p>
      )}
      <h2
        id={headingId}
        className="font-heading text-3xl font-semibold tracking-tight text-text sm:text-4xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-text-secondary">{description}</p>
      )}
    </div>
  );
}
