type NavLink = {
  label: string;
  href: string;
};

type TimeSlot = {
  num: string;
  start: string;
  end: string;
};

type Day = "lunes" | "martes" | "miércoles" | "jueves";

type WeekDay = {
  id: Day;
  initial: string;
};

type ScheduleBlock = {
  title: string;
  days: string;
  activeDay: Day[];
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
      title: "Por las mañanas",
      days: "Lunes a Jueves",
      activeDay: ["lunes", "martes", "miércoles", "jueves"],
      slots: [
        { num: "1", start: "09:00", end: "10:20" },
        { num: "2", start: "10:30", end: "11:45" },
        { num: "3", start: "12:00", end: "13:20" },
      ],
    },
    {
      title: "Por las tardes",
      days: "Lunes y Miércoles",
      activeDay: ["lunes", "miércoles"],
      slots: [
        { num: "1", start: "15:00", end: "16:20" },
        { num: "2", start: "16:30", end: "17:45" },
      ],
    },
    {
      title: "Por la tarde y noche",
      days: "Martes y Jueves",
      activeDay: ["martes", "jueves"],
      slots: [
        { num: "1", start: "15:00", end: "16:20" },
        { num: "2", start: "16:30", end: "17:45" },
        { num: "3", start: "18:00", end: "19:20" },
        { num: "4", start: "19:30", end: "20:45" },
      ],
    },
  ],
};

export const weekDays: WeekDay[] = [
  { id: "lunes", initial: "L" },
  { id: "martes", initial: "M" },
  { id: "miércoles", initial: "Mi" },
  { id: "jueves", initial: "J" },
];

const whatsappMessage = "¡Hola Sebastian! Quiero reservar una clase de prueba.";

export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
