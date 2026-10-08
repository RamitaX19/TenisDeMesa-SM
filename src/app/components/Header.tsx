import Link from "next/link";
import { ButtonLink } from "@/app/components/ButtonLink";
import { Container } from "@/app/components/Container";
import { site } from "@/app/content/site";

export function Header() {
  return (
    <header className="sticky top-0 border-b border-white/10 bg-brand text-white">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-wide uppercase md:text-xl"
        >
          {site.name}
        </Link>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-8">
            {site.nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ButtonLink href="#contacto" size="sm">
          Clase de prueba
        </ButtonLink>
      </Container>
    </header>
  );
}
