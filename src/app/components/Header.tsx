import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/app/components/ButtonLink";
import { Container } from "@/app/components/Container";
import { HeaderShell } from "@/app/components/HeaderShell";
import { MobileMenu } from "@/app/components/MobileMenu";
import { site } from "@/app/content/site";

export function Header() {
  return (
    <HeaderShell>
      <Container className="flex h-full items-center justify-between gap-4">
        <a href="#inicio" className="flex h-full items-center py-1.5">
          <Image
            src="/logo.webp"
            alt={site.name}
            width={600}
            height={641}
            className="h-full w-auto"
          />
        </a>

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

        <div className="hidden md:block">
          <ButtonLink href="#contacto" size="sm">
            Contactame
          </ButtonLink>
        </div>

        <MobileMenu links={site.nav} />
      </Container>
    </HeaderShell>
  );
}
