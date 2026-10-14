import { Container } from "@/app/components/Container";
import { SectionHeading } from "@/app/components/SectionHeading";
import {
  ArrowRight,
  CalendarDays,
  Footprints,
  GlassWater,
  Shirt,
  TowelRack,
} from "lucide-react";
import { getWhatsappUrl, site } from "@/app/content/site";
import { PingPongIcon } from "@/app/components/icons/PingPongIcon";

const thingsToBring = [
  { label: "Tu paleta", icon: <PingPongIcon className="size-6" /> },
  { label: "Agua", icon: <GlassWater className="size-6" /> },
  { label: "Toalla chica", icon: <TowelRack className="size-6" /> },
  { label: "Zapatillas cómodas", icon: <Footprints className="size-6" /> },
  { label: "Ropa cómoda", icon: <Shirt className="size-6" /> },
];

export function Classes() {
  return (
    <section id="clases" className="bg-white py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Clases"
          title="Encontrá tu clase"
          description="Grupos para chicos, jóvenes y adultos: desde los que nunca agarraron una paleta hasta los que quieren competir."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {site.classes.map((group, index) => (
            <article
              key={group.name}
              className="flex reveal flex-col rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span
                  aria-hidden="true"
                  className="font-display text-5xl font-bold text-accent"
                >
                  0{index + 1}
                </span>
                <span className="rounded-full bg-accent-dif px-3 py-1 text-xs font-semibold text-brand">
                  {group.ages}
                </span>
              </div>

              <h3 className="mt-6 font-display text-3xl font-bold text-brand uppercase">
                {group.name}
              </h3>
              <p className="mt-3 flex-1 text-slate-600">{group.description}</p>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-slate-200 pt-4 text-sm">
                <span className="flex items-center gap-2 font-medium whitespace-nowrap text-slate-500">
                  <CalendarDays className="size-4 shrink-0" />
                  {site.classFrequency}
                </span>
                <a
                  href={getWhatsappUrl(
                    `¡Hola Sebastian! Quiero info sobre la clase de ${group.name.toLowerCase()}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1 rounded-full bg-accent-dif px-1.5 py-1 font-semibold text-accent-dark hover:text-brand"
                >
                  Consultar
                  <span className="sr-only"> por la clase de {group.name}</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 reveal rounded-2xl bg-mist-100 p-6 md:p-8">
          <h3 className="font-display text-2xl font-bold text-brand uppercase">
            ¿Qué necesitás traer?
          </h3>
          <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {thingsToBring.map((item) => (
              <li key={item.label} className="flex items-center gap-3">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-accent-dark shadow-sm">
                  {item.icon}
                </span>
                <span className="font-medium text-slate-700">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
