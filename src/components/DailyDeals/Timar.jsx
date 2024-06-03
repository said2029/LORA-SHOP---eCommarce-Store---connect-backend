"use client";
import { useEffect, useState } from "react";
import ProductCard from "../Cards/ProductCard";
import moment from "moment";
export default function Timar() {
  const momantEnd = moment("2025-05-29T20:20:00");
  
  const thisTimediff = momantEnd.diff(moment());
  const RelaTime = moment.duration(thisTimediff);
  const [time, setTime] = useState(["00", "00", "00", "00"]);

  useEffect(() => {
    const setIntervalId = setInterval(() => {
      if (momantEnd.isAfter(moment())) {
        RelaTime.add(-1, "seconds");
        setTime([
          RelaTime.get("days").toString().padStart(2, "0"),
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
    <div className="flex items-center justify-center w-full gap-1.5 count-down-main">
      <div className="timer">
        <div className="rounded-xl  py-1.5 min-w-[80px] flex items-center justify-center flex-col gap-0 aspect-square px-1.5">
          <h3 className="countdown-element days font-manrope font-semibold text-2xl text-white text-center">
            {time[0]}
          </h3>
          <p className="text-sm font-inter capitalize font-normal text-white text-center w-full">
            days
          </p>
        </div>
      </div>
      <h3 className="font-manrope font-semibold text-2xl text-gray-900">:</h3>
      <div className="timer">
        <div className="rounded-xl  py-1.5 min-w-[80px] flex items-center justify-center flex-col gap-0 aspect-square px-1.5">
          <h3 className="countdown-element hours font-manrope font-semibold text-2xl text-white text-center">
            {time[1]}
          </h3>
          <p className="text-sm font-inter capitalize font-normal text-white text-center w-full">
            Hours
          </p>
        </div>
      </div>
      <h3 className="font-manrope font-semibold text-2xl text-gray-900">:</h3>
      <div className="timer">
        <div className="rounded-xl  py-1.5 min-w-[80px] flex items-center justify-center flex-col gap-0 aspect-square px-1.5">
          <h3 className="countdown-element minutes font-manrope font-semibold text-2xl text-white text-center">
            {time[2]}
          </h3>
          <p className="text-sm font-inter capitalize font-normal text-white text-center w-full">
            Minutes
          </p>
        </div>
      </div>
      <h3 className="font-manrope font-semibold text-2xl text-gray-900">:</h3>
      <div className="timer">
        <div className="rounded-xl  py-1.5 min-w-[80px] flex items-center justify-center flex-col gap-0 aspect-square px-1.5">
          <h3 className="countdown-element seconds sec font-manrope font-semibold text-2xl text-white text-center">
            {time[3]}
          </h3>
          <p className="text-sm font-inter capitalize font-normal text-white text-center w-full">
            Seconds
          </p>
        </div>
      </div>
    </div>
  );
}
