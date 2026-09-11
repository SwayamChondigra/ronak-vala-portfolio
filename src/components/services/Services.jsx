import Container from "../ui/Container";

const services = [
  {
    number: "01",
    title: "Cinematic Video Editing",
    description:
      "Professional editing focused on storytelling, pacing, transitions and cinematic presentation.",
  },
  {
    number: "02",
    title: "YouTube Video Editing",
    description:
      "Engaging long-form edits with strong pacing, clean cuts, graphics and retention-focused storytelling.",
  },
  {
    number: "03",
    title: "Reels & Shorts",
    description:
      "Fast-paced short-form content designed for Instagram Reels, YouTube Shorts and social media.",
  },
  {
    number: "04",
    title: "Color Correction",
    description:
      "Balanced colors, improved tones and consistent visuals that make every shot look polished.",
  },
  {
    number: "05",
    title: "Photo Editing",
    description:
      "Professional photo enhancement, retouching and color adjustments for personal and commercial use.",
  },
  {
    number: "06",
    title: "Poster & Creative Design",
    description:
      "Eye-catching posters, thumbnails and promotional creatives for brands, events and social media.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-[#050505]
        py-24
        sm:py-28
        lg:py-32
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-1/3
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#ff5c35]/5
          blur-[140px]
        "
      />

      <Container>
        {/* =========================
            SECTION HEADER
        ========================== */}

        <div className="mb-14">
          {/* Section Label — LEFT */}
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#ff5c35]" />

            <span
              className="
        text-xs
        uppercase
        tracking-[5px]
        text-[#ff5c35]
      "
            >
              03 / Services
            </span>
          </div>

          {/* Heading — CENTER */}
          <div className="mt-7 flex justify-center">
            <h2
              className="
        text-center
        font-['Bebas_Neue']
        text-6xl
        uppercase
        leading-[0.85]
        tracking-tight
        text-white
        sm:text-7xl
        lg:text-8xl
      "
            >
              WHAT I <span className="text-[#ff5c35]">DO.</span>
            </h2>
          </div>
        </div>
        {/* =========================
    SERVICES GRID
========================== */}
        <div className="flex w-full justify-center">
          <div
            className="
      grid
      w-full
      max-w-5xl
      grid-cols-1
      gap-5
      md:grid-cols-2
      lg:grid-cols-3
    "
          >
            {services.map((service) => (
              <div
                key={service.number}
                className="
          group
          relative
          flex
          min-h-[270px]
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-white/[0.025]
          p-7
          text-center
          transition-all
          duration-500
          hover:-translate-y-1
          hover:border-[#ff5c35]/40
          hover:bg-white/[0.04]
        "
              >
                {/* Glow */}
                <div
                  className="
            pointer-events-none
            absolute
            -right-16
            -top-16
            h-40
            w-40
            rounded-full
            bg-[#ff5c35]/0
            blur-3xl
            transition-all
            duration-500
            group-hover:bg-[#ff5c35]/10
          "
                />

                {/* Number + Arrow */}
                <div className="relative flex items-center justify-between">
                  <span
                    className="
              font-mono
              text-xs
              tracking-[3px]
              text-zinc-600
              transition-colors
              duration-300
              group-hover:text-[#ff5c35]
            "
                  >
                    {service.number}
                  </span>

                  <span
                    className="
              text-lg
              text-zinc-600
              transition-all
              duration-300
              group-hover:-translate-y-1
              group-hover:translate-x-1
              group-hover:text-[#ff5c35]
            "
                  >
                    ↗
                  </span>
                </div>

                {/* Content */}
                <div className="relative mt-auto">
                  <h3
                    className="
              font-['Bebas_Neue']
              text-3xl
              uppercase
              leading-none
              tracking-wide
              text-white
              transition-colors
              duration-300
              group-hover:text-[#ff5c35]
            "
                  >
                    {service.title}
                  </h3>

                  <div
                    className="
              my-5
              h-px
              w-full
              bg-white/10
              transition-colors
              duration-300
              group-hover:bg-[#ff5c35]/30
            "
                  />

                  <p
                    className="
              text-sm
              leading-6
              text-zinc-500
              transition-colors
              duration-300
              group-hover:text-zinc-300
            "
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
