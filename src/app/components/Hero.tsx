import { ButtonLink } from "@/app/components/ButtonLink";
import { Container } from "@/app/components/Container";
import { site } from "@/app/content/site";

export function Hero() {
  return (
    <section id="inicio" className="bg-brand py-20 text-white md:py-32">
      <Container>
        <p className="font-semibold tracking-widest text-accent uppercase motion-safe:animate-fade-up">
          Escuela de pingpong para todas las edades
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-none font-bold uppercase motion-safe:animate-fade-up motion-safe:[animation-delay:150ms] md:text-5xl">
          Clases de ping pong en {site.city}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/80 motion-safe:animate-fade-up motion-safe:[animation-delay:300ms] md:text-xl">
          {site.description}
        </p>
        <div className="mt-10 flex flex-col gap-4 motion-safe:animate-fade-up motion-safe:[animation-delay:450ms] sm:flex-row">
          <ButtonLink href="#contacto">Quiero anotarme</ButtonLink>
          <ButtonLink href="#clases" variant="secondary">
            Ver clases
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
