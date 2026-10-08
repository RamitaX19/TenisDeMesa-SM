type NavLink = {
  label: string;
  href: string;
};

type Site = {
  name: string;
  city: string;
  description: string;
  coach: string;
  address: string;
  whatsapp: string;
  instagram: string;
  nav: NavLink[];
};

export const site: Site = {
  name: "Tenis de Mesa SM Calamuchita",
  city: "Santa Rosa de Calamuchita",
  description:
    "Aprende técnica, mejora tu juego y diviértete en un ambiente cercano. Grupos para niños y adultos, de iniciación a competición.",
  coach: "Sebastian Molina",
  address: "SUM-Santa Rosa de Calamuchita",
  whatsapp: "5493516745726",
  instagram: "https://www.instagram.com/tenisdemesa_sm/",
  nav: [
    { label: "Clases", href: "#clases" },
    { label: "Horarios", href: "#horarios" },
    { label: "Contacto", href: "#contacto" },
  ],
};
