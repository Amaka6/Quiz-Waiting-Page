function PeoplePresent () {
    return (
        <div className="mt-3 flex justify-center">
        <div className="relative inline-flex items-center justify-center gap-3 bt-yellow-200 rounded-full bg-white py-1.5 px-2 shadow-sm shadow-white-50">
            <div className="flex items-center justify-center -space-x-2">
            <span className="flex items-center justify-center rounded-full ring-2 ring-white bg-orange-400 z-40 text-white text-xs font-bold h-[34px] w-[34px]">You</span>
            <span className="flex items-center justify-center rounded-full ring-2 ring-white h-[30px] w-[30px] bg-yellow-300/50 z-30 font-bold">F</span>
            <span className="flex items-center justify-center rounded-full ring-2 ring-white h-[30px] w-[30px] bg-orange-100 z-20 font-bold">J</span>
            <span className="flex items-center justify-center rounded-full ring-2 ring-white h-[30px] w-[30px] bg-yellow-200/100 z-10 font-bold">J</span>
           </div> 

           <span className="text-sm font-bold text-slate-700">You and 18 others are here</span>
             
        </div>
        </div>
    )
}

export default PeoplePresent;