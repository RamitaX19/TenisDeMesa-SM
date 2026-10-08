import { Container } from "@/app/components/Container";
import { site } from "@/app/content/site";

export function Schedule() {
  return (
    <section id="horarios" className="py-20 md:py-28">
      <Container>
        <h2 className="font-display text-4xl font-bold text-brand uppercase md:text-5xl">
          Horarios
        </h2>
        <p className="mt-4 max-w-xl text-lg text-slate-600">
          Elegí el día y el turno que mejor te queden.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {site.schedule.map((block) => (
            <article
              key={block.days}
              className="rounded-2xl border border-slate-200 p-6"
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
