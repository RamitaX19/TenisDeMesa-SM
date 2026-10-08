import { ButtonLink } from "@/app/components/ButtonLink";
import { Container } from "@/app/components/Container";
import { site } from "@/app/content/site";

export function Hero() {
  return (
    <section className="bg-brand py-20 text-white md:py-32">
      <Container>
        <p className="font-semibold tracking-widest text-accent uppercase">
          Escuela de pingpong para todas las edades
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-none font-bold uppercase md:text-7xl">
          {site.name}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/80 md:text-xl">
          {site.description}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <ButtonLink href="#contacto">Reserva tu clase de prueba</ButtonLink>
          <ButtonLink href="#clases" variant="secondary">
            Ver clases
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
