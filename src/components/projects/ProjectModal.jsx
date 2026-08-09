import { X } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  // Only explicitly landscape projects use landscape mode.
  // Everything else is treated as portrait.
  const isLandscape = project.orientation === "landscape";

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-black/85
        p-4
        backdrop-blur-md
      "
      onClick={onClose}
    >
      <div
        className={`
          relative
          flex
          max-h-[94vh]
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-zinc-950
          shadow-2xl

          ${
            isLandscape
              ? "w-full max-w-5xl"
              : "w-auto max-w-[430px]"
          }
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* =========================
            CLOSE BUTTON
        ========================== */}
        <button
          onClick={onClose}
          aria-label="Close project"
          className="
            absolute
            right-4
            top-4
            z-20
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-black/70
            text-white
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-white/40
            hover:bg-white/10
          "
        >
          <X size={20} strokeWidth={1.8} />
        </button>

        {/* =========================
            VIDEO
        ========================== */}
        <div
          className={`
            flex
            items-center
            justify-center
            overflow-hidden
            bg-black

            ${
              isLandscape
                ? "aspect-video w-full"
                : "aspect-[9/16] w-[min(430px,90vw)]"
            }
          `}
        >
          <video
            src={project.video}
            poster={project.image}
            controls
            autoPlay
            playsInline
            className="
              block
              h-full
              w-full
              object-contain
            "
          />
        </div>

        {/* =========================
            PROJECT INFORMATION
        ========================== */}
        <div
          className="
            shrink-0
            border-t
            border-white/10
            px-6
            py-4
          "
        >
          <p
            className="
              mb-1
              text-[10px]
              uppercase
              tracking-[4px]
              text-[#ff5c35]
            "
          >
            {project.category}
          </p>

          <h2
            className="
              font-['Bebas_Neue']
              text-2xl
              uppercase
              tracking-wide
              text-white
            "
          >
            {project.title}
          </h2>
        </div>
      </div>
    </div>
  );
}