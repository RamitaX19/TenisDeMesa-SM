import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "md" | "sm";
  external?: boolean;
};

const variantClasses = {
  primary: "bg-accent text-brand hover:bg-accent/90",
  secondary: "border border-white/30 text-white hover:bg-white/10",
};

const sizeClasses = {
  md: "px-6 py-3 text-base",
  sm: "px-4 py-2 text-sm",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors ${variantClasses[variant]} ${sizeClasses[size]}`}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
