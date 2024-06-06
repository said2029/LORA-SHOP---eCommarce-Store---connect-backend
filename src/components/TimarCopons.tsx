import { useEffect, useState } from "react";
import moment from "moment";
export default function TimarCopon({ DetaTime }: { DetaTime: string }) {
  const momantEnd = moment(DetaTime);
  console.log("momantEnd :", momantEnd);

  const thisTimediff = momantEnd.diff(moment());
  const RelaTime = moment.duration(thisTimediff);
  let daysFromMonth = moment.duration(RelaTime.get("month"), "months").asDays();
  daysFromMonth += RelaTime.get("days");
  const [time, setTime] = useState(["00", "00", "00", "00"]);
  console.log(RelaTime);

  useEffect(() => {
    const setIntervalId = setInterval(() => {
      if (momantEnd.isAfter(moment())) {
        RelaTime.add(-1, "seconds");
        setTime([
          daysFromMonth.toString().padStart(2,"0"),
          RelaTime.get("hours").toString().padStart(2, "0"),
          RelaTime.get("minutes").toString().padStart(2, "0"),
          RelaTime.get("seconds").toString().padStart(2, "0"),
        ]);
      } else {
        setTime(["00", "00", "00", "00"]);
        clearInterval(setIntervalId);
      }
    }, 1000);
    return () => clearInterval(setIntervalId);
  }, []);
  return (
    <section>
      <ul className="flex gap-2 items-center text-white">
        <li>
          <article className="flex flex-col items-center text-lg font-medium bg-blue-300 px-1 rounded-lg ">
            <span>{time[0]}</span>
          </article>
        </li>
        <li className="text-2xl text-gray-900">:</li>
        <li>
          <article className="flex flex-col items-center text-lg bg-blue-300 px-1 rounded-lg font-medium">
            <span>{time[1]}</span>
          </article>
        </li>
        <li className="text-2xl text-gray-900">:</li>
        <li>
          <article className="flex flex-col items-center text-lg font-medium bg-blue-300 px-1 rounded-lg ">
            <span>{time[2]}</span>
          </article>
        </li>
        <li className="text-2xl text-gray-900">:</li>
        <li>
          <article className="flex flex-col items-center text-lg font-medium bg-blue-300 px-1 rounded-lg ">
            <span>{time[3]}</span>
          </article>
        </li>
      </ul>
    </section>
  );
}
