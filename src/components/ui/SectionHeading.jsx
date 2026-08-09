import clsx from "clsx";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) {
  return (
    <div
      className={clsx(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span
          className="
            mb-4
            inline-block
            uppercase
            tracking-[6px]
            text-sm
            font-medium
            text-[#ff5c35]
          "
        >
          {eyebrow}
        </span>
      )}

      <h2
        className="
          font-['Bebas_Neue']
          text-6xl
          leading-none
          tracking-wide
          md:text-8xl
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            mt-8
            text-lg
            leading-8
            text-zinc-400
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}