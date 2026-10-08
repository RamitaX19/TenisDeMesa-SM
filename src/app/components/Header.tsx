import Link from "next/link";
import { ButtonLink } from "@/app/components/ButtonLink";
import { Container } from "@/app/components/Container";
import { site } from "@/app/content/site";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 h-20 border-b border-white/10 bg-brand text-white">
      <Container className="flex h-full items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 font-display text-lg font-bold tracking-wide uppercase md:text-xl"
        >
          <Image
            src="/logo.webp"
            alt={site.name}
            width={600}
            height={641}
            className="h-20 w-auto"
          />
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
