export default function Container({
  children,
  className = "",
  as: Component = "div",
}) {
  return (
    <Component
      className={`
        mx-auto
        w-full
        max-w-[1440px]
        px-6
        sm:px-8
        lg:px-12
        xl:px-20
        ${className}
      `}
    >
      {children}
    </Component>
  );
}
