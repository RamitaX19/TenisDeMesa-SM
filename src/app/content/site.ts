type NavLink = {
  label: string;
  href: string;
};

type Site = {
  name: string;
  city: string;
  description: string;
  nav: NavLink[];
};

export const site: Site = {
  name: "Escuela de Pingpong",
  city: "Villa Ciudad Parque",
  description:
    "Aprende técnica, mejora tu juego y diviértete en un ambiente cercano. Grupos para niños y adultos, de iniciación a competición.",
  nav: [
    { label: "Clases", href: "#clases" },
    { label: "Horarios", href: "#horarios" },
    { label: "Contacto", href: "#contacto" },
  ],
};
