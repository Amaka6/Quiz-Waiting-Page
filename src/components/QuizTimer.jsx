import { Timer } from "lucide-react";

function QuizTimer () {
  return (
    <div className="rounded-full flex items-center gap-2 bg-orange-400 text-white text-lg shadow-md shadow-orange-200 px-10 py-3">
      <Timer className="h-4 w-4" />
      <span className="font-bold tabular-nums">
        Block ends 35mins 59sec
      </span>
    </div>
  );
}

export default QuizTimer;