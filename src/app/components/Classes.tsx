import { Container } from "@/app/components/Container";
import { SectionHeading } from "@/app/components/SectionHeading";
import { CalendarDays } from "lucide-react";
import { site } from "@/app/content/site";

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
              className="flex flex-col rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
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

              <div className="mt-6 flex items-center gap-2 border-t border-slate-200 pt-4 text-sm font-medium text-slate-500">
                <CalendarDays className="size-4" />
                {site.classFrequency}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
