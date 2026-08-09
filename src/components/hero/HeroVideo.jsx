export default function HeroVideo() {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Left Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/55 to-black/40" />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-56 w-full bg-gradient-to-t from-[#050505] to-transparent" />
    </>
  );
}