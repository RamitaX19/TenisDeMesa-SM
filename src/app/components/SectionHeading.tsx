type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
};

const toneClasses = {
  light: {
    eyebrow: "text-accent-dark",
    title: "text-brand",
    description: "text-slate-600",
  },
  dark: {
    eyebrow: "text-accent",
    title: "text-white",
    description: "text-white/80",
  },
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
}: SectionHeadingProps) {
  const colors = toneClasses[tone];

  return (
    <div className="max-w-2xl">
      <p
        className={`text-sm font-semibold tracking-widest uppercase ${colors.eyebrow}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-4xl font-bold uppercase md:text-5xl ${colors.title}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg ${colors.description}`}>{description}</p>
      )}
    </div>
  );
}
