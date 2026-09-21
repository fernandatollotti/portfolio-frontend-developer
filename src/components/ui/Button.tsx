import Link from "next/link";
import { cn } from "@/lib/utils";

type CommonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  onClick?: never;
  type?: never;
  disabled?: never;
};

type ButtonAsButton = CommonProps & {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-heading text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary: "bg-accent text-bg hover:bg-accent/90",
  secondary: "border border-border text-text hover:border-accent hover:text-accent",
  ghost: "text-text-secondary hover:text-accent",
};

export function Button(props: ButtonProps) {
  const { children, variant = "primary", className } = props;
  const classes = cn(base, variants[variant], className);

  if ("href" in props && props.href) {
    const isExternal = props.href.startsWith("http");
    return (
      <Link
        href={props.href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  const { onClick, type = "button", disabled } = props as ButtonAsButton;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
