import { RefreshCw } from "lucide-react";

function ActionButtons () {
    return (
        <div className="grid items-center justify-center">
            <button className="flex w-[400px] items-center justify-center gap-2 mt-4 rounded-full py-2 bg-gray-300 text-slate-400 text-lg font-bold cursor-not-allowed"><RefreshCw className="h-5 w-5"/>Check again in 3:47</button>



            <button className="rounded-full py-2 mt-4 border border-yellow-200 bg-white text-lg font-bold text-amber-800 hover:bg-amber-50">Back to Activity Board</button>
        </div>
    );
}


export default ActionButtons;