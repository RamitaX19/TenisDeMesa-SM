import { Container } from "@/app/components/Container";
import { site } from "@/app/content/site";
import { SectionHeading } from "@/app/components/SectionHeading";

export function Schedule() {
  return (
    <section id="horarios" className="bg-mist-300 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Horarios"
          title="Elegí tu turno"
          description="Clases de lunes a jueves, a la mañana y a la tarde. Vení el día que mejor te quede."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {site.schedule.map((block) => (
            <article
              key={block.days}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <h3 className="font-display text-2xl font-bold text-brand uppercase">
                {block.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-slate-500">
                {block.days}
              </p>

              <ul className="mt-6 space-y-3">
                {block.slots.map((slot) => (
                  <li key={slot.start} className="text-lg font-semibold">
                    {slot.start} a {slot.end} h
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
