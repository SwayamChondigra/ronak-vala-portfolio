import { FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Container from "../ui/Container";
import Button from "../ui/Button";

export default function HeroContent() {
  return (
    <Container>
      <div className="grid min-h-screen grid-cols-12 items-center">
        {/* Left Side */}
        <div className="col-span-12 lg:col-span-5 lg:pl-8 xl:pl-12">
          {/* Eyebrow */}
          <p className="hero-fade-1 !mb-3 text-sm uppercase tracking-[8px] text-[#ff5c35]">
            VIDEO EDITOR
          </p>

          {/* Name */}
          <h1
            className="
              hero-fade-2
              font-['Bebas_Neue']
              text-[5rem]
              leading-[0.82]
              tracking-tight
              sm:text-[7rem]
              lg:text-[10rem]
              xl:text-[10rem]
            "
          >
            RONAK
            <br />
            VALA
          </h1>

          {/* Description */}
          <p className="hero-fade-3 !mt-[48px] max-w-md text-lg leading-8 text-zinc-300">
            Crafting cinematic edits, commercials, YouTube videos and visual
            stories that leave a lasting impression.
          </p>

          {/* Buttons */}
          <div className="hero-fade-4 !mt-[40px] flex flex-wrap gap-6">
            <Button href="#projects">View Projects →</Button>

            <Button href="#contact" variant="secondary">
              Let's Talk
            </Button>
          </div>

          {/* Social Media */}
          <div className="hero-fade-5 !mt-[24px] flex items-center gap-6">
            <span
              className="
                text-xs
                uppercase
                tracking-[5px]
                text-zinc-500
              "
            >
              Follow Me
            </span>

            <FaInstagram
              size={17}
              className="
                cursor-pointer
                text-zinc-400
                transition-all
                duration-300
                hover:-translate-y-1
                hover:text-[#ff5c35]
              "
            />

            <FaYoutube
              size={17}
              className="
                cursor-pointer
                text-zinc-400
                transition-all
                duration-300
                hover:-translate-y-1
                hover:text-[#ff5c35]
              "
            />

            <MdEmail
              size={19}
              className="
                cursor-pointer
                text-zinc-400
                transition-all
                duration-300
                hover:-translate-y-1
                hover:text-[#ff5c35]
              "
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden lg:col-span-7 lg:block" />
      </div>
    </Container>
  );
}