"use client"; // Avisa a Next que este archivo reacciona a clics (necesario para abrir/cerrar la foto grande).

import Image from "next/image";
// useState = memoria del componente. useEffect = "hacé algo cuando pase tal cosa". useCallback = guarda una función para no recrearla.
import { useCallback, useEffect, useState } from "react";
import { gallery } from "@/app/content/site";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function Gallery() {
  // selected = número de la foto abierta (0 es la primera). null = ninguna abierta.
  // setSelected = la función para cambiarlo. Empieza en null: todo cerrado.
  const [selected, setSelected] = useState<number | null>(null);

  // Cantidad total de fotos.
  const total = gallery.images.length;

  // Cerrar: ponemos selected en null.
  const close = useCallback(() => setSelected(null), []);

  // Siguiente: sumamos 1. El "% total" hace que después de la última vuelva a la primera.
  const next = useCallback(
    () =>
      setSelected((current) =>
        current === null ? null : (current + 1) % total,
      ),
    [total],
  );

  // Anterior: restamos 1. Sumar "total" evita números negativos al pasar de la primera a la última.
  const prev = useCallback(
    () =>
      setSelected((current) =>
        current === null ? null : (current - 1 + total) % total,
      ),
    [total],
  );

  // Este bloque corre cada vez que se abre o cierra una foto.
  useEffect(() => {
    // Si no hay foto abierta, no hacemos nada.
    if (selected === null) return;

    // Función que mira qué tecla apretaste.
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close(); // Esc cierra
      if (event.key === "ArrowRight") next(); // flecha derecha: siguiente
      if (event.key === "ArrowLeft") prev(); // flecha izquierda: anterior
    }

    // Empezamos a escuchar el teclado.
    window.addEventListener("keydown", onKeyDown);
    // Bloqueamos el scroll de la página de fondo mientras la foto está abierta.
    document.body.style.overflow = "hidden";

    // Cuando se cierra la foto, deshacemos todo (dejamos de escuchar y devolvemos el scroll).
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selected, close, next, prev]);

  return (
    <section id="galeria" className="bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow={gallery.eyebrow}
          title={gallery.title}
          description={gallery.description}
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* "index" es el número de cada foto (0, 1, 2...). Lo usamos para saber cuál abrir. */}
          {gallery.images.map((image, index) => (
            // Ahora cada foto es un <button> (un botón clickeable) en vez de un <div>.
            // Así también se puede abrir con el teclado (Tab + Enter), que es mejor para accesibilidad.
            // onClick: al hacer clic, guardamos el número de esta foto en "selected" y se abre.
            // cursor-zoom-in: el mouse se vuelve una lupa al pasar por encima.
            <button
              key={image.src}
              type="button"
              onClick={() => setSelected(index)}
              aria-label={`Ampliar foto: ${image.alt}`}
              className="group relative aspect-4/3 reveal cursor-zoom-in overflow-hidden rounded-2xl bg-accent-dif"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </Container>

      {/* Esto solo se dibuja si hay una foto abierta (selected distinto de null). */}
      {selected !== null && (
        // Capa que tapa toda la pantalla.
        // fixed inset-0: pegada a los 4 bordes de la pantalla. z-50: por encima de todo.
        // bg-brand/90: azul oscuro de tu logo, casi opaco.
        // onClick={close}: un clic en el fondo cierra.
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Foto ampliada"
          onClick={close}
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand/90 p-4"
        >
          {/* Botón cerrar (X), arriba a la derecha. */}
          <button
            type="button"
            onClick={close}
            aria-label="Cerrar"
            className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20"
          >
            ✕
          </button>

          {/* Flecha izquierda. e.stopPropagation() evita que el clic llegue al fondo y cierre todo. */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Foto anterior"
            className="absolute left-2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20 sm:left-6"
          >
            ‹
          </button>

          {/* Caja de la foto grande. relative + tamaño fijo: necesario para <Image fill>.
              Clic acá no cierra (stopPropagation), así podés mirar la foto tranquilo. */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative h-[80vh] w-full max-w-5xl"
          >
            <Image
              src={gallery.images[selected].src} // la foto elegida
              alt={gallery.images[selected].alt}
              fill
              sizes="100vw"
              // object-contain: se ve la foto ENTERA sin recortes (en la grilla usamos cover, que recorta).
              className="object-contain"
            />
          </div>

          {/* Flecha derecha. */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Foto siguiente"
            className="absolute right-2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20 sm:right-6"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
