import { useEffect, useState } from "react";
import { ArrowUpRight, Menu } from "lucide-react";
import Button from "../ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-0 top-5 z-50 w-full">
      <div className="mx-auto flex max-w-7xl justify-center px-6">
        <nav
          className={`
            flex
            items-center
            justify-between
            rounded-full
            border
            border-white/10
            bg-black/25
            backdrop-blur-2xl
            transition-all
            duration-500

            ${
              scrolled
                ? "w-[880px] px-7 py-3 shadow-[0_15px_50px_rgba(0,0,0,.45)]"
                : "w-[950px] px-8 py-4"
            }
          `}
        >
          {/* Logo */}

          <a
            href="/"
            className="
              font-['Bebas_Neue']
              text-4xl
              tracking-wide
              text-white
            "
          >
            <span className="text-[#ff5c35]">R</span>V
          </a>

          {/* Desktop Menu */}

          <ul className="hidden items-center gap-10 md:flex">
            {[
              "About",
              "Projects",
              "Services",
              "Contact",
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="
                    relative
                    uppercase
                    tracking-[3px]
                    text-sm
                    text-white/90
                    transition

                    after:absolute
                    after:left-0
                    after:-bottom-2
                    after:h-[2px]
                    after:w-0
                    after:bg-[#ff5c35]
                    after:transition-all

                    hover:text-white
                    hover:after:w-full
                  "
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side */}

          <div className="flex items-center gap-3">
            <Button
              href="#contact"
              className="hidden md:flex"
            >
              Let's Talk
              <ArrowUpRight size={18} />
            </Button>

            <button
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/5
                md:hidden
              "
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}