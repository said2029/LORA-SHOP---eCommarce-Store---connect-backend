import useTimer from "@/hooks/useTimer";
import { cn } from "../../utils/cn";

export default function TimarCoupon({ DetaTime,cuponActive }: { DetaTime: string,cuponActive:boolean }) {
  const time =useTimer(DetaTime);

  return (
    <section>
      <ul className="flex gap-2 items-center text-white">
        <li>
          <article className={cn(`flex flex-col items-center text-lg font-medium ${!cuponActive? "bg-red-400": "bg-[#25a18e]"} px-1 rounded-lg `)}>
            <span>{time[0]}</span>
          </article>
        </li>
        <li className="text-2xl text-gray-900">:</li>
        <li>
          <article className={cn(`flex flex-col items-center text-lg font-medium ${!cuponActive? "bg-red-400": "bg-[#25a18e]"} px-1 rounded-lg `)}>
            <span>{time[1]}</span>
          </article>
        </li>
        <li className="text-2xl text-gray-900">:</li>
        <li>
          <article className={cn(`flex flex-col items-center text-lg font-medium ${!cuponActive? "bg-red-400": "bg-[#25a18e]"} px-1 rounded-lg `)}>
            <span>{time[2]}</span>
          </article>
        </li>
        <li className="text-2xl text-gray-900">:</li>
        <li>
          <article className={cn(`flex flex-col items-center text-lg font-medium ${!cuponActive? "bg-red-400": "bg-[#25a18e]"} px-1 rounded-lg `)}>
            <span>{time[3]}</span>
          </article>
        </li>
      </ul>
    </section>
  );
}
