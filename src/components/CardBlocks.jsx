import { Check } from "lucide-react";

const card = [
  { time: "6-7 AM", status: "done" },
  { time: "9-10 AM", status: "now" },
  { time: "12-1 PM", status: "upcoming" },
  { time: "5-6 PM", status: "upcoming" },
  { time: "9-10 PM", status: "upcoming" },
];

function CardBlocks() {
  return (
    <div className="mt-4 grid grid-cols-5 gap-2">
      {card.map((block) => (
        <div
          key={block.time}
          className={`flex h-[70px] flex-col items-center justify-center rounded-2xl border text-xs font-bold ${
            block.status === "now"
              ? "border-orange-500 bg-orange-500 text-white shadow-lg shadow-orange-200"
              : block.status === "done"
              ? "border-slate-100 bg-white text-slate-400"
              : "border-yellow-200 bg-white text-amber-800"
          }`}
        >
          {block.time}
          {block.status === "done" && <Check className="h-4 w-4" />}
          {block.status === "now" && (
            <span className="text-[10px] font-medium">NOW</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default CardBlocks;