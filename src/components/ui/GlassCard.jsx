import clsx from "clsx";

export default function GlassCard({ children, className = "" }) {
  return (
    <div
      className={clsx(
        `
          rounded-[28px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-2xl
          shadow-[0_20px_60px_rgba(0,0,0,.35)]
          transition-all
          duration-500
        `,
        className,
      )}
    >
      {children}
    </div>
  );
}
