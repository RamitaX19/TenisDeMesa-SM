type NavLink = {
  label: string;
  href: string;
};

type TimeSlot = {
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
  titleNum: string;
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
  classes: ClassGroup[];
  classFrequency: string;
};

type ClassGroup = {
  name: string;
  ages: string;
  description: string;
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
      titleNum: "1",
      days: "Lunes a Jueves",
      activeDay: ["lunes", "martes", "miércoles", "jueves"],
      slots: [
        { start: "09:00", end: "10:20" },
        { start: "10:30", end: "11:45" },
        { start: "12:00", end: "13:20" },
      ],
    },
    {
      title: "Por las tardes",
      titleNum: "2",
      days: "Lunes y Miércoles",
      activeDay: ["lunes", "miércoles"],
      slots: [
        { start: "15:00", end: "16:20" },
        { start: "16:30", end: "17:45" },
      ],
    },
    {
      title: "Por la tarde y noche",
      titleNum: "3",
      days: "Martes y Jueves",
      activeDay: ["martes", "jueves"],
      slots: [
        { start: "15:00", end: "16:20" },
        { start: "16:30", end: "17:45" },
        { start: "18:00", end: "19:20" },
        { start: "19:30", end: "20:45" },
      ],
    },
  ],
  classes: [
    {
      name: "Chicos",
      ages: "6 a 12 años",
      description:
        "Juegos, desafíos y mucha pelotita: aprenden a jugar mientras se divierten y hacen amigos.",
    },
    {
      name: "Jóvenes",
      ages: "13 a 17 años",
      description:
        "Sumá efecto a tus golpes, ganá velocidad y animate a competir.",
    },
    {
      name: "Adultos",
      ages: "18 años o más",
      description:
        "Nunca es tarde para agarrar la paleta: entrená, despejá la cabeza y pasala bien.",
    },
  ],
  classFrequency: "2 veces por semana",
};

export const weekDays: WeekDay[] = [
  { id: "lunes", initial: "L" },
  { id: "martes", initial: "M" },
  { id: "miércoles", initial: "Mi" },
  { id: "jueves", initial: "J" },
];

const whatsappMessage =
  "¡Hola Sebastian! Quiero anotarme en las clases de tenis de mesa.";

export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
