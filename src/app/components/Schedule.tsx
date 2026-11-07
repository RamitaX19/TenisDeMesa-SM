import { Container } from "@/app/components/Container";
import { site, weekDays, whatsappUrl } from "@/app/content/site";
import { SectionHeading } from "@/app/components/SectionHeading";
import { ButtonLink } from "@/app/components/ButtonLink";

export function Schedule() {
  return (
    <section id="horarios" className="bg-mist-300 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Horarios"
          title="Elegí tu turno"
          description="Clases de lunes a jueves, a la mañana y a la tarde. Vení el día que mejor te quede."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {site.schedule.map((block) => (
            <article
              key={block.days}
              className="reveal rounded-2xl bg-white p-5 shadow-sm"
            >
              <div className="flex flex-col items-center justify-center">
                <h3 className="mt-1 font-display text-3xl font-bold text-brand uppercase">
                  {block.days}
                </h3>
                <div className="mt-3 flex gap-2" aria-hidden="true">
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

              <div className="flex flex-col items-stretch justify-between gap-4 lg:flex-row">
                <div className="mt-5 w-full rounded-2xl bg-mist-100 p-2">
                  <div className="px-3">
                    <span className="font-sans text-xs font-semibold text-slate-500 uppercase">
                      horarios de la mañana
                    </span>
                  </div>
                  <ul className="m-1.5 mt-2 space-y-2">
                    {block.slots.map((slot, index) => (
                      <li
                        key={slot.start}
                        className="flex w-full items-center justify-between rounded-xl bg-white px-3 py-2"
                      >
                        <span className="flex size-6 items-center justify-center rounded-md bg-accent-dif text-sm font-semibold text-brand">
                          {index + 1}
                        </span>
                        <span>
                          {slot.start} - {slot.end}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5 w-full rounded-2xl bg-mist-100 p-2">
                  <div className="px-3">
                    <span className="font-sans text-xs font-semibold text-slate-500 uppercase">
                      horarios de la tarde
                    </span>
                  </div>
                  <ul className="m-1.5 mt-2 space-y-2">
                    {block.slots1.map((slot, index) => (
                      <li
                        key={slot.start}
                        className="flex items-center justify-between rounded-xl bg-white px-3 py-2"
                      >
                        <span className="flex size-6 items-center justify-center rounded-md bg-accent-dif text-sm font-semibold text-brand">
                          {index + 1}
                        </span>
                        <span>
                          {slot.start} - {slot.end}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center">
                <ButtonLink href={whatsappUrl} external size="sm">
                  Consulta un horario para venir
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
