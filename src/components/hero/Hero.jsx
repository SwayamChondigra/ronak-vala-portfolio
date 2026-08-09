import HeroContent from "./HeroContent";
import HeroVideo from "./HeroVideo";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050505]"
    >
      {/* Background Video */}
      <HeroVideo />

      {/* Hero Layout */}
      <div className="relative z-10">
        <HeroContent />
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}
