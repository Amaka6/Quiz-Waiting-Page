import cup from "../assets/cup.jpg";

function Round() {
  return (
    <div className="relative mx-auto h-[160px] w-[160px]">
      <div className="flex h-full w-full items-center justify-center rounded-full bg-yellow-200/50">
        <img src={cup} alt="" className="h-[40px] w-auto" />
      </div>

      <span className="absolute -left-16 top-1 text-sm font-bold text-orange-700">Ndewo!</span>
      <span className="absolute -right-16 bottom-5 text-sm font-bold text-orange-300">Biko chere</span>
    </div>
  );
}

export default Round;