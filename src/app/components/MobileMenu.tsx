"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/app/components/Container";
import type { NavLink } from "@/app/content/site";

type MobileMenuProps = {
  links: NavLink[];
};

export function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        className="flex size-10 items-center justify-center rounded-full transition-colors hover:bg-white/10"
      >
        {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
      </button>

      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label="Menú"
          className="absolute inset-x-0 top-full border-b border-white/10 bg-brand shadow-lg"
        >
          <Container>
            <ul className="divide-y divide-white/10 py-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 font-medium text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      )}
    </div>
  );
}
