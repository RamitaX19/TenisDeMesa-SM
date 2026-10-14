"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ButtonLink } from "@/app/components/ButtonLink";
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
          className="absolute inset-x-3 top-full mt-2 rounded-3xl border border-white/10 bg-brand p-4 shadow-xl in-data-[scrolled=true]:inset-x-0"
        >
          <ul className="divide-y divide-white/10">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-2 py-3 font-medium text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ButtonLink
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="mt-4 w-full"
          >
            Contactame
          </ButtonLink>
        </nav>
      )}
    </div>
  );
}
