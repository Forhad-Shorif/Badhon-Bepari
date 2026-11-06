type SectionHeadingProps = {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export default function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  const isDark = tone === "light";

  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl"} ${className}`}
    >
      <p
        className={`flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] ${
          align === "center" ? "justify-center" : ""
        } ${isDark ? "text-amber-soft" : "text-forest"}`}
      >
        <span className={`h-px w-8 ${isDark ? "bg-amber-soft/60" : "bg-forest/40"}`} />
        {kicker}
      </p>

      <h2
        className={`mt-5 text-balance font-display text-[clamp(2.4rem,5vw,4.25rem)] leading-[1.12] tracking-[-0.015em] ${
          isDark ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg ${
            align === "center" ? "mx-auto" : ""
          } ${isDark ? "text-cream/65" : "text-ink/65"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
