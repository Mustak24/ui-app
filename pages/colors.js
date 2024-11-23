
import { capitalize } from "@/Functions/helper";
import { MdContentCopy } from "react-icons/md";

export default function () {
  return (
    <main>
      <div className="flex flex-col gap-1 px-5 pt-10 pb-16">
        <div className="text-3xl font-serif font-bold">Tailwind Colors</div>
        <div className="text-lg font-serif">
          Tailwind CSS colors in HSL, RGB, and HEX formats.
        </div>
        <button
          id="colors"
          onClick={() => {
            window.location = "#colors";
          }}
          className="flex items-center justify-center h-10 w-fit px-5 rounded-md bg-[var(--text)] text-[var(--bg)] text-[12px] hover:brightness-75"
        >
          Browse Colors
        </button>
      </div>
      <hr className="border-[var(--textSec)] w-screen" />
      <div className="py-10 px-5 flex flex-col gap-10">
        {[
          "slate",
          "gray",
          "zinc",
          "neutral",
          "stone",
          "red",
          "orange",
          "amber",
          "yellow",
          "lime",
          "green",
          "emerald",
          "teal",
          "cyan",
          "sky",
          "blue",
          "indigo",
          "violet",
          "purple",
          "fuchsia",
          "pink",
          "rose",
        ].map((color) => (
          <ColorCard color={color} />
        ))}
      </div>
    </main>
  );
}

function ColorCard({ color }) {
  const colors = [
    `bg-${color}-50`,
    `bg-${color}-100`,
    `bg-${color}-200`,
    `bg-${color}-300`,
    `bg-${color}-400`,
    `bg-${color}-500`,
    `bg-${color}-600`,
    `bg-${color}-700`,
    `bg-${color}-800`,
    `bg-${color}-900`,
    `bg-${color}-950`,
  ];
  return (
    <div className="flex flex-col shadow-[0_0_1px_var(--textSec)] rounded-md p-2 gap-2 relative">
      <div className="flex justify-between">
        <span className="font-serif text-md">{capitalize(color)}</span>

      </div>
      <div className="flex sm:flex-wrap max-sm:flex-col items-center gap-2 sm:justify-stretch">
        {colors.map((bg) => (
          <div className="min-w-[100px] cursor-pointer gap-1 h-[180px] rounded-md w-full flex items-center justify-center flex-col sm:flex-1 relative group">
            <div className={`${bg} w-full h-full rounded-md shadow-[0_0_1px_var(--textSec)]`}></div>
            <div className="group-hover:brightness-100 brightness-50 transition-all text-[12px]">
              {bg.slice(3)}
            </div>
            <MdContentCopy className="absolute top-2 right-2 size-6      opacity-0 group-hover:opacity-100 transition-all mix-blend-difference" />
          </div>
        ))}
      </div>
    </div>
  );
}
