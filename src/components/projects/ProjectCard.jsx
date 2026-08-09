import { ArrowUpRight, Play } from "lucide-react";

export default function ProjectCard({
  title,
  category,
  image,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        group
        relative
        block
        w-full
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-zinc-950
        text-left
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-white/20
        focus:outline-none
      "
    >
      {/* Image */}
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        {/* Dark Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-black/10
            transition-all
            duration-500
            group-hover:bg-black/30
          "
        />

        {/* Category */}
        <div
          className="
            absolute
            left-4
            top-4
            rounded-full
            border
            border-white/20
            bg-black/60
            px-4
            py-2
            text-[10px]
            font-medium
            uppercase
            tracking-[3px]
            text-white
            backdrop-blur-md
          "
        >
          {category}
        </div>

        {/* Play Button */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            flex
            h-14
            w-14
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-white/30
            bg-black/50
            text-white
            backdrop-blur-sm
            transition-all
            duration-500
            group-hover:scale-110
            group-hover:border-[#ff5c35]
            group-hover:bg-[#ff5c35]
          "
        >
          <Play
            size={19}
            fill="currentColor"
            className="ml-1"
          />
        </div>
      </div>

      {/* Card Footer */}
      <div
        className="
          flex
          items-center
          justify-between
          px-5
          py-5
        "
      >
        <h3
          className="
            font-['Bebas_Neue']
            text-xl
            uppercase
            tracking-wide
            text-white
            sm:text-2xl
          "
        >
          {title}
        </h3>

        <ArrowUpRight
          size={18}
          className="
            text-zinc-500
            transition-all
            duration-300
            group-hover:-translate-y-1
            group-hover:translate-x-1
            group-hover:text-[#ff5c35]
          "
        />
      </div>
    </button>
  );
}