import { ArrowUpRight } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/theronakvala/";
const YOUTUBE_URL = "https://www.youtube.com/@ronakvala_01";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        w-full
        overflow-hidden
        bg-black
        px-6
        py-28
        sm:px-8
        lg:px-16
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[#ff5c35]/5
          blur-[140px]
        "
      />

      {/* ===================================================== */}
      {/* SECTION LABEL */}
      {/* ===================================================== */}

      <div
        className="
          relative
          z-10
          mb-20
          flex
          items-center
          gap-4
        "
      >
        <span className="h-px w-10 bg-[#ff5c35]" />

        <span
          className="
            text-xs
            uppercase
            tracking-[5px]
            text-[#ff5c35]
          "
        >
          04 / Contact
        </span>
      </div>

      {/* ===================================================== */}
      {/* MAIN CONTACT HERO */}
      {/* ===================================================== */}

      <div
        className="
          relative
          z-10
          flex
          w-full
          flex-col
          items-center
          text-center
          pb-20
        "
      >
        {/* Heading */}
        <h2
          className="
            m-0
            w-full
            font-['Bebas_Neue']
            text-[4.2rem]
            uppercase
            leading-[0.86]
            tracking-[-1px]
            text-white
            sm:text-[5.5rem]
            md:text-[7rem]
            lg:text-[8rem]
            xl:text-[9rem]
          "
        >
          <span className="block">
            LET'S WORK
          </span>

          <span className="block text-[#ff5c35]">
            TOGETHER.
          </span>
        </h2>

        {/* Description */}
        <p
          className="
            mx-auto
            mt-10
            max-w-[520px]
            px-4
            text-center
            text-sm
            leading-7
            text-zinc-500
            sm:text-base
            sm:leading-8
          "
        >
          Have a project in mind?
          <br />
          Let's create something sharp, intentional
          <br className="hidden sm:block" />
          and impossible to ignore.
        </p>

        {/* CTA */}
        <a
          href="mailto:ronakvala01@gmail.com"
          className="
            group
            !mt-8
            inline-flex
            min-h-[56px]
            items-center
            justify-center
            gap-3
            rounded-full
            bg-[#ff5c35]
            px-9
            py-4
            text-sm
            font-semibold
            text-white
            transition-all
            duration-300
            hover:scale-105
            hover:bg-[#ff704d]
          "
        >
          LET'S TALK

          <ArrowUpRight
            size={18}
            strokeWidth={2}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </a>
      </div>

      {/* ===================================================== */}
      {/* CONTACT INFORMATION */}
      {/* ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          mt-4
          grid
          w-full
          max-w-6xl
          grid-cols-1
          border-t
          border-white/10
          md:grid-cols-3
        "
      >
        {/* ================================================= */}
        {/* EMAIL */}
        {/* ================================================= */}

        <div
          className="
            flex
            flex-col
            items-center
            border-b
            border-white/10
            px-6
            py-9
            text-center
            md:items-start
            md:border-b-0
            md:border-r
            md:text-left
          "
        >
          <p
            className="
              mb-3
              text-[10px]
              uppercase
              tracking-[4px]
              text-zinc-600
            "
          >
            Email
          </p>

          <a
            href="mailto:ronakvala01@gmail.com"
            className="
              text-sm
              text-zinc-300
              transition-colors
              hover:text-[#ff5c35]
            "
          >
            ronakvala01@gmail.com
          </a>
        </div>

        {/* ================================================= */}
        {/* SOCIAL */}
        {/* ================================================= */}

        <div
          className="
            flex
            flex-col
            items-center
            border-b
            border-white/10
            px-6
            py-9
            text-center
            md:border-b-0
            md:border-r
          "
        >
          <p
            className="
              mb-5
              text-[10px]
              uppercase
              tracking-[4px]
              text-zinc-600
            "
          >
            Social
          </p>

          <div className="flex items-center justify-center gap-7">

            {/* ================= INSTAGRAM ================= */}

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="
                group
                flex
                items-center
                gap-2.5
                text-sm
                text-zinc-300
                transition-colors
                duration-300
                hover:text-[#ff5c35]
              "
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="4.2"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />

                <circle
                  cx="17.4"
                  cy="6.6"
                  r="1.15"
                  fill="currentColor"
                />
              </svg>

              <span>
                Instagram
              </span>
            </a>

            {/* ================= YOUTUBE ================= */}

            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="
                group
                flex
                items-center
                gap-2.5
                text-sm
                text-zinc-300
                transition-colors
                duration-300
                hover:text-[#ff5c35]
              "
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              >
                <path
                  d="
                    M23.5 6.2
                    C23.2 4.9 22.2 3.9 20.9 3.6
                    C18.6 3 12 3 12 3
                    S5.4 3 3.1 3.6
                    C1.8 3.9 0.8 4.9 0.5 6.2
                    C0 8.5 0 12 0 12
                    S0 15.5 0.5 17.8
                    C0.8 19.1 1.8 20.1 3.1 20.4
                    C5.4 21 12 21 12 21
                    S18.6 21 20.9 20.4
                    C22.2 20.1 23.2 19.1 23.5 17.8
                    C24 15.5 24 12 24 12
                    S24 8.5 23.5 6.2
                    Z
                  "
                />

                <path
                  d="M9.5 8.2L16 12L9.5 15.8V8.2Z"
                  fill="black"
                />
              </svg>

              <span>
                YouTube
              </span>
            </a>

          </div>
        </div>

        {/* ================================================= */}
        {/* AVAILABLE FOR */}
        {/* ================================================= */}

        <div
          className="
            flex
            flex-col
            items-center
            px-6
            py-9
            text-center
            md:items-start
            md:text-left
          "
        >
          <p
            className="
              mb-3
              text-[10px]
              uppercase
              tracking-[4px]
              text-zinc-600
            "
          >
            Available For
          </p>

          <p className="text-sm text-zinc-300">
            Freelance & Remote Projects
          </p>
        </div>
      </div>

      {/* ===================================================== */}
      {/* FOOTER */}
      {/* ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          mt-10
          flex
          w-full
          max-w-7xl
          flex-col
          items-center
          justify-between
          gap-4
          border-t
          border-white/10
          pt-6
          text-[10px]
          uppercase
          tracking-[3px]
          text-zinc-700
          md:flex-row
        "
      >
        <span>
          © 2026 Ronak Vala
        </span>

        <span>
          Video Editor / Visual Storyteller
        </span>
      </div>
    </section>
  );
}