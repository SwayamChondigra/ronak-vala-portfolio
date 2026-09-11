import Container from "../ui/Container";

const tools = [
  {
    number: "01",
    name: "Adobe Premiere Pro",
    type: "VIDEO EDITING",
    description:
      "Professional video editing, cinematic cuts, pacing and storytelling.",
  },
  {
    number: "02",
    name: "CapCut",
    type: "VIDEO EDITING",
    description:
      "Fast-paced reels, shorts and engaging social media video content.",
  },
  {
    number: "03",
    name: "Canva",
    type: "POSTER & DESIGN",
    description:
      "Creative posters, social media designs, thumbnails and promotional graphics.",
  },
  {
    number: "04",
    name: "Adobe Photoshop",
    type: "PHOTO & DESIGN",
    description:
      "Photo editing, retouching, thumbnails and detailed creative designs.",
  },
  {
    number: "05",
    name: "Adobe Lightroom",
    type: "PHOTO EDITING",
    description:
      "Photo enhancement, color correction and consistent visual tones.",
  },
];

function ToolCard({ tool }) {
  return (
    <div
      className="
        group
        relative
        min-h-[250px]
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-zinc-950/60
        p-7
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#ff5c35]/40
        hover:bg-zinc-900/80
      "
    >
      {/* Number */}
      <span className="text-[10px] tracking-[4px] text-zinc-600">
        {tool.number}
      </span>

      {/* Tool Logo */}
      <div
        className="
          mt-7
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-lg
          border
          border-white/10
          bg-white/[0.03]
          transition-all
          duration-300
          group-hover:border-[#ff5c35]/30
        "
      >
        <span className="font-['Bebas_Neue'] text-lg text-white">
          {tool.name === "Adobe Premiere Pro" && "Pr"}
          {tool.name === "CapCut" && "CC"}
          {tool.name === "Canva" && "Ca"}
          {tool.name === "Adobe Photoshop" && "Ps"}
          {tool.name === "Adobe Lightroom" && "Lr"}
        </span>
      </div>

      {/* Arrow */}
      <span
        className="
          absolute
          right-7
          top-7
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

      {/* Tool Type */}
      <p
        className="
          mt-7
          text-[9px]
          uppercase
          tracking-[4px]
          text-[#ff5c35]
        "
      >
        {tool.type}
      </p>

      {/* Tool Name */}
      <h3
        className="
          mt-3
          font-['Bebas_Neue']
          text-3xl
          uppercase
          leading-none
          text-white
        "
      >
        {tool.name}
      </h3>

      {/* Divider */}
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

      {/* Description */}
      <p className="max-w-sm text-sm leading-6 text-zinc-500">
        {tool.description}
      </p>
    </div>
  );
}

export default function Tools() {
  return (
    <section
      id="tools"
      className="
        relative
        w-full
        overflow-hidden
        bg-black
        py-28
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#ff5c35]/5
          blur-[140px]
        "
      />

      {/* Main Container */}
      <Container>
        {/* Section Label */}
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
            04 / Tools
          </span>
        </div>

        {/* Heading */}
        <div className="mt-8 text-center">
          <h2
            className="
              font-['Bebas_Neue']
              text-[4.5rem]
              uppercase
              leading-[0.85]
              tracking-tight
              text-white
              sm:text-7xl
              md:text-8xl
              lg:text-[9rem]
            "
          >
            TOOLS I <span className="text-[#ff5c35]">USE.</span>
          </h2>
        </div>

        {/* Tools Grid */}
        <div
          className="
    relative
    z-10
    mx-auto
    mt-16
    grid
    w-full
    max-w-5xl
    grid-cols-1
    gap-5
    sm:grid-cols-2
    lg:grid-cols-3
  "
        >
          {tools.map((tool, index) => (
            <div
              key={tool.number}
              className={index >= 3 ? "lg:translate-x-12" : ""}
            >
              <ToolCard tool={tool} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
