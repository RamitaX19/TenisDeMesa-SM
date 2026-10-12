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
              className="rounded-2xl bg-white p-5 shadow-sm"
            >
              <div>
                <p className="mt-1 text-lg font-medium text-slate-400">
                  {block.title}
                </p>
                <h2 className="font-display text-xl font-bold text-brand uppercase">
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
                            ? "bg-accent-dif text-brand"
                            : "bg-slate-100 text-slate-400"
                        }`}
                      >
                        {day.initial}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-mist-100 p-2">
                <div className="flex justify-between">
                  <ul>
                    {block.slots.map((slot) => (
                      <li
                        key={slot.num}
                        className="mt-2.5 size-6 items-center justify-center rounded-md bg-accent-dif p-1 text-center text-sm"
                      >
                        {slot.num}
                      </li>
                    ))}
                  </ul>
                  <ul>
                    {block.slots.map((slot) => (
                      <li
                        key={slot.start}
                        className="text-1xl mt-2.5 font-semibold"
                      >
                        {slot.start} - {slot.end}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
