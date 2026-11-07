export type NavLink = {
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
  days: string;
  activeDay: Day[];
  slots: TimeSlot[];
  slots1: TimeSlot[];
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
  seoDescription: string;
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
    "Aprende técnica, mejora tu juego y diviértete en un ambiente cercano. Para niños y adultos, uniendo generaciones!.",
  coach: "Sebastian Molina",
  address: "SUM - Centro de Formación Deportiva Municipal",
  whatsapp: "5493516745726",
  instagram: "https://www.instagram.com/tenisdemesa_sm/",
  instagramHandle: "@tenisdemesa_sm",
  phone: "+54 9 3516745726",
  seoDescription:
    "Clases de tenis de mesa para chicos, jóvenes y adultos en Santa Rosa de Calamuchita, Córdoba. De lunes a jueves, mañana y tarde. Escribinos por WhatsApp.",
  nav: [
    { label: "Clases", href: "#clases" },
    { label: "Horarios", href: "#horarios" },
    { label: "Historia", href: "#historia" },
    { label: "Galería", href: "#galeria" },
    { label: "Contacto", href: "#contacto" },
  ],
  schedule: [
    {
      days: "Martes",
      activeDay: ["martes"],
      slots: [
        { start: "09:00", end: "10:20" },
        { start: "10:30", end: "11:45" },
        { start: "12:00", end: "13:20" },
      ],
      slots1: [
        { start: "15:00", end: "16:20" },
        { start: "16:30", end: "17:45" },
        { start: "18:00", end: "19:20" },
        { start: "19:30", end: "20:45" },
      ],
    },
    {
      days: "Jueves",
      activeDay: ["jueves"],
      slots: [
        { start: "09:00", end: "10:20" },
        { start: "10:30", end: "11:45" },
        { start: "12:00", end: "13:20" },
      ],
      slots1: [
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

export function getWhatsappUrl(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const whatsappUrl = getWhatsappUrl(whatsappMessage);

type HistoryEvent = {
  year: string;
  title: string;
  text: string;
};

type GalleryImage = {
  src: string;
  alt: string;
};

export const history = {
  eyebrow: "Nuestra historia",
  title: "Historia del tenis de mesa",
  description:
    "Un deporte que nació como un juego improvisado y llegó a los Juegos Olímpicos.",
  events: [
    {
      year: "1870",
      title: "Origen",
      text: "No existe un origen claro de este deporte. Se cree que comenzó en la década de 1870, en un club de tenis, como una versión improvisada del tenis en miniatura.",
    },
    {
      year: "1891",
      title: "Primeros días",
      text: "James Gibb usó una mesa de madera dividida por una red y jugó a 21 puntos con pelotas de goma. Poco después encontró en Estados Unidos unas pelotas de celuloide que rebotaban mucho mejor. Por el sonido de la pelota al pegar en la raqueta y en la mesa, el juego pasó a llamarse 'ping pong'. Como ese nombre se registró como marca comercial en Estados Unidos, finalmente se adoptó el nombre 'tenis de mesa'.",
    },
    {
      year: "1901",
      title: "Primeros torneos",
      text: "Se celebran los primeros torneos en Inglaterra. En 1927 la asociación inglesa de ping pong cambió su nombre a asociación inglesa de tenis de mesa, porque 'ping pong' ya era marca comercial en Estados Unidos.",
    },
    {
      year: "1926",
      title: "Internacionalización",
      text: "Se constituye la Federación Internacional de Tenis de Mesa (ITTF) y se organiza el primer Campeonato del Mundo, con jugadores de Hungría, Austria, Inglaterra, India, Gales, Checoslovaquia y Alemania. El primer campeón fue el húngaro R. Jacobi.",
    },
    {
      year: "1952",
      title: "Supremacía asiática",
      text: "Con la llegada de los japoneses y la incorporación de nuevas técnicas y materiales, empezó una nueva época. Hoy China domina el panorama mundial, seguida por Japón, Hungría, República Checa, Reino Unido, República de Corea y Suecia.",
    },
    {
      year: "1977",
      title: "Deporte olímpico",
      text: "El Comité Olímpico Internacional (COI) reconoció el tenis de mesa como deporte olímpico, aunque su debut oficial no tuvo lugar hasta 1988 en Seúl.",
    },
  ] satisfies HistoryEvent[],
};

// Datos de la sección Galería.
export const gallery = {
  eyebrow: "Conocé el lugar",
  title: "Galería",
  description: "Un vistazo a nuestras mesas y al espacio donde entrenamos.",
  images: [
    {
      src: "/galeria1.webp",
      alt: "Mesa azul de tenis de mesa con red en el salón",
    },
    {
      src: "/galeria2.webp",
      alt: "Salón con varias mesas y techo de madera",
    },
    { src: "/galeria3.webp", alt: "profe Seba enseñando a unos chicos" },
    {
      src: "/galeria4.webp",
      alt: "mesas de tenis de mesa",
    },
    { src: "/galeria5.webp", alt: "chicos practicando" },
    { src: "/galeria6.webp", alt: "chicos practicando" },
  ] satisfies GalleryImage[],
};
