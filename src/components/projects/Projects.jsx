import { useState } from "react";
import Container from "../ui/Container";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "Cinematic Film",
    category: "Cinematic",
    image: "/images/project-01.jpg",
    video: "/videos/project-01.mp4",
    orientation: "portrait",
  },

  {
    title: "Brand Campaign",
    category: "Commercial",
    image: "/images/project-02.jpg",
    video: "/videos/project-02.mp4",
    orientation: "landscape",
  },

  {
    title: "YouTube Edit",
    category: "YouTube",
    image: "/images/project-03.jpg",
    video: "/videos/project-03.mp4",
    orientation: "portrait",
  },

  {
    title: "Visual Story",
    category: "Social",
    image: "/images/project-04.jpg",
    video: "/videos/project-04.mp4",
    orientation: "portrait",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        bg-black
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
          left-[-200px]
          top-[300px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#ff5c35]/5
          blur-[140px]
        "
      />

      <Container>
        {/* =========================
            SECTION LABEL
        ========================== */}
        <div className="flex w-full items-center gap-4">
          <span className="h-px w-10 bg-[#ff5c35]" />

          <span
            className="
              text-xs
              uppercase
              tracking-[5px]
              text-[#ff5c35]
            "
          >
            02 / Selected Work
          </span>
        </div>

        {/* =========================
            CENTERED HEADING
        ========================== */}
        <div className="mt-8 flex justify-center">
          <h2
            className="
              text-center
              font-['Bebas_Neue']
              text-6xl
              uppercase
              leading-[0.9]
              tracking-tight
              text-white
              sm:text-7xl
              lg:text-8xl
            "
          >
            Work That <span className="text-[#ff5c35]">Speaks.</span>
          </h2>
        </div>

        {/* =========================
            PROJECT GRID
        ========================== */}
        <div className="mt-12 flex w-full justify-center">
          <div
            className="
              grid
              w-full
              max-w-5xl
              grid-cols-1
              gap-5
              md:grid-cols-2
            "
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                category={project.category}
                image={project.image}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </Container>

      {/* =========================
    VIDEO MODAL
========================== */}

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
