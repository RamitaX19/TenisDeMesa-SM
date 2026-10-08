type NavLink = {
  label: string;
  href: string;
};

type TimeSlot = {
  start: string;
  end: string;
};

type ScheduleBlock = {
  title: string;
  days: string;
  slots: TimeSlot[];
};

type Site = {
  name: string;
  city: string;
  description: string;
  coach: string;
  address: string;
  whatsapp: string;
  instagram: string;
  schedule: ScheduleBlock[];
  phone: string;
  instagramHandle: string;
  nav: NavLink[];
};

export const site: Site = {
  name: "Tenis de Mesa SM Calamuchita",
  city: "Santa Rosa de Calamuchita",
  description:
    "Aprende técnica, mejora tu juego y diviértete en un ambiente cercano. Para niños y adultos, de iniciación a competición.",
  coach: "Sebastian Molina",
  address: "SUM - Centro de Formación Deportiva Municipal",
  whatsapp: "5493516745726",
  instagram: "https://www.instagram.com/tenisdemesa_sm/",
  instagramHandle: "@tenisdemesa_sm",
  phone: "+54 9 3516745726",
  nav: [
    { label: "Clases", href: "#clases" },
    { label: "Horarios", href: "#horarios" },
    { label: "Contacto", href: "#contacto" },
  ],
  schedule: [
    {
      title: "Mañanas",
      days: "Lunes a Jueves",
      slots: [
        { start: "09:00", end: "10:20" },
        { start: "10:30", end: "11:45" },
        { start: "12:00", end: "13:20" },
      ],
    },
    {
      title: "Tardes",
      days: "Lunes y Miércoles",
      slots: [
        { start: "15:00", end: "16:20" },
        { start: "16:30", end: "17:45" },
      ],
    },
    {
      title: "Tardes",
      days: "Martes y Jueves",
      slots: [
        { start: "15:00", end: "16:20" },
        { start: "16:30", end: "17:45" },
        { start: "18:00", end: "19:20" },
        { start: "19:30", end: "20:45" },
      ],
    },
  ],
};

const whatsappMessage = "¡Hola Sebastian! Quiero reservar una clase de prueba.";

export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
