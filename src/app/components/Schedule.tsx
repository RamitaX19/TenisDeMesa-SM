import { Container } from "@/app/components/Container";
import { site, weekDays } from "@/app/content/site";
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
              <div>
                <p className="mt-1 text-xl font-medium text-slate-500">
                  {block.title}
                </p>
                <h2 className="font-display text-2xl font-bold text-brand uppercase">
                  {block.days}
                </h2>
                <div className="mt-2 flex gap-2" aria-hidden="true">
                  {weekDays.map((day) => {
                    const isActive = block.activeDay.includes(day.id);

                    return (
                      <span
                        key={day.id}
                        className={`flex size-7 items-center justify-center rounded-full text-xs font-bold ${
                          isActive
                            ? "bg-accent text-brand"
                            : "bg-slate-100 text-slate-400"
                        }`}
                      >
                        {day.initial}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div>
                <ul className="mt-6 space-y-3">
                  {block.slots.map((slot) => (
                    <li key={slot.start} className="text-lg font-semibold">
                      {slot.start} a {slot.end}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
