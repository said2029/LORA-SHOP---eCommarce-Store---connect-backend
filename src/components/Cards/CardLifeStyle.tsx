import { MoveRight } from "lucide-react";

export default function CardLifeStyle() {
  return (
    <div className="h-[299px] overflow-hidden rounded-lg relative">
      <div className="w-full h-full bg-gradient-to-t to-50%  from-black to-transparent absolute"></div>
      <div className="flex justify-center items-center flex-col absolute bottom-4 left-1/2 right-1/2 text-center text-nowrap text-white">
        <h1 className="font-medium text-nowrap text-2xl mb-2">For Fitenns</h1>
        <button className="font-medium flex gap-2">
            View All <MoveRight />
        </button>
      </div>

      <div className="w-full h-full">
        <img
          className="object-cover text-center w-full"
          src="./images/P1.webp"
          alt="image Product"
        />
      </div>
    </div>
  );
}
