import { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";
import Tools from "./components/tools/Tools";
import Contact from "./components/contact/Contact";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".scroll-reveal, .scroll-reveal-card",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-[#050505] text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Tools />
      <Contact />
    </main>
  );
}

export default App;
