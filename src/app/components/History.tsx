// Traemos los textos que escribimos en site.ts.
import { history } from "@/app/content/site";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function History() {
  return (
    <section id="historia" className="bg-white py-16 md:py-24">
      {}
      <Container>
        {}
        <SectionHeading
          eyebrow={history.eyebrow}
          title={history.title}
          description={history.description}
        />

        {}
        <ol className="mt-12 max-w-3xl border-l-2 border-accent-dif">
          {}
          {history.events.map((event) => (
            <li
              key={event.year}
              className="relative reveal pb-10 pl-8 last:pb-0"
            >
              {}
              <span className="absolute top-1.5 -left-2.25 h-4 w-4 rounded-full border-2 border-white bg-accent-dark" />

              {}
              <p className="font-display text-2xl font-bold text-accent-dark">
                {event.year}
              </p>

              {}
              <h3 className="mt-1 font-display text-xl font-bold text-brand uppercase">
                {event.title}
              </h3>

              {}
              <p className="mt-2 leading-relaxed text-slate-600">
                {event.text}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
