import clsx from "clsx";

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-medium transition-all duration-300 active:scale-95 hover:-translate-y-1";

  const variants = {
    primary:
      "bg-[#ff5c35] text-white hover:bg-[#ff734d] hover:shadow-[0_10px_35px_rgba(255,92,53,.35)]",

    secondary:
      "border border-white/10 bg-white/5 text-white backdrop-blur-xl hover:border-[#ff5c35] hover:bg-[#ff5c35] hover:text-white",

    ghost:
      "text-white hover:text-[#ff5c35]",
  };

  const classes = clsx(
    baseClasses,
    variants[variant],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
}