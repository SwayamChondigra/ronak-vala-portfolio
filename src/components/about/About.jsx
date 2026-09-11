import Container from "../ui/Container";

export default function About() {
  return (
    <section
      id="about"
      className="
      scroll-reveal
    relative
    overflow-hidden
    bg-[#050505]
    py-[140px]
    lg:py-[180px]
  "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-200px]
          top-[20%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#ff5c35]/10
          blur-[140px]
        "
      />

      <Container>
        <div className="grid grid-cols-12 gap-y-16 lg:gap-x-16">
          {/* Section Label */}
          <div className="col-span-12 lg:col-span-3">
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
                01 / About
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-12 lg:col-span-9">
            {/* Heading */}
            <h2
              className="
                max-w-5xl
                font-['Bebas_Neue']
                text-5xl
                uppercase
                leading-[0.9]
                tracking-tight
                text-white
                sm:text-6xl
                lg:text-8xl
              "
            >
              Turning raw footage
              <br />
              into <span className="text-[#ff5c35]">visual stories.</span>
            </h2>

            {/* Description */}
            <div className="!mt-[40px] max-w-3xl">
              <p className=" text-lg leading-8 text-zinc-300 sm:text-xl ">
                I'm Ronak Vala, a video editor focused on creating cinematic,
                engaging and visually powerful content. I transform raw footage
                into polished videos that capture attention and communicate a
                clear story.
              </p>

              <p className="!mt-[20px] text-base leading-7 text-zinc-500">
                From cinematic edits and commercials to YouTube videos, reels
                and social media content, every cut, transition and visual
                element is designed with purpose.
              </p>
            </div>

            {/* Specialties */}
            <div className="!mt-[48px]">
              <p className="!mb-2 text-xs uppercase tracking-[4px] text-zinc-500">
                Specialties
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Cinematic Editing",
                  "Color Grading",
                  "Motion Graphics",
                  "YouTube Editing",
                  "Reels & Shorts",
                  "Commercials",
                ].map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-5
                      py-3
                      text-sm
                      text-zinc-300
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      hover:border-[#ff5c35]/50
                      hover:bg-[#ff5c35]/10
                      hover:text-white
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div
              className="
                !mt-[56px]
                grid
                grid-cols-2
                border-t
                border-white/10
                pt-10
                sm:grid-cols-4
              "
            >
              <div>
                <p
                  className="
                    font-['Bebas_Neue']
                    text-5xl
                    text-white
                    sm:text-6xl
                  "
                >
                  50+
                </p>

                <p
                  className="
                    mt-2
                    text-xs
                    uppercase
                    tracking-[3px]
                    text-zinc-500
                  "
                >
                  Projects
                </p>
              </div>

              <div>
                <p
                  className="
                    font-['Bebas_Neue']
                    text-5xl
                    text-white
                    sm:text-6xl
                  "
                >
                  3+
                </p>

                <p
                  className="
                    mt-2
                    text-xs
                    uppercase
                    tracking-[3px]
                    text-zinc-500
                  "
                >
                  Years
                </p>
              </div>

              <div className="mt-8 sm:mt-0">
                <p
                  className="
                    font-['Bebas_Neue']
                    text-5xl
                    text-white
                    sm:text-6xl
                  "
                >
                  6+
                </p>

                <p
                  className="
                    mt-2
                    text-xs
                    uppercase
                    tracking-[3px]
                    text-zinc-500
                  "
                >
                  Services
                </p>
              </div>

              <div className="mt-8 sm:mt-0">
                <p
                  className="
                    font-['Bebas_Neue']
                    text-5xl
                    text-[#ff5c35]
                    sm:text-6xl
                  "
                >
                  100%
                </p>

                <p
                  className="
                    mt-2
                    text-xs
                    uppercase
                    tracking-[3px]
                    text-zinc-500
                  "
                >
                  Dedication
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
