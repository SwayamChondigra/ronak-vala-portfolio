import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center">

      <span
        className="
        mb-2
        text-[11px]
        uppercase
        tracking-[6px]
        text-zinc-500
      "
      >
        Scroll
      </span>

      <ChevronDown
        size={22}
        className="animate-bounce text-[#ff5c35]"
      />

    </div>
  );
}