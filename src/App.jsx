import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <main className="bg-[#050505] text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
    </main>
  );
}

export default App;
