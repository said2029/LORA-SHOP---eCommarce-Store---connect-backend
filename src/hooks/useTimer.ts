import { useEffect, useState } from "react";
import moment from "moment";
function useTimer(DetaTime: string) {
  const momantEnd = moment(DetaTime);

  const thisTimediff = momantEnd.diff(moment());
  const RelaTime = moment.duration(thisTimediff);
  let daysFromMonth = moment.duration(RelaTime.get("month"), "months").asDays();
  daysFromMonth += RelaTime.get("days");
  const [time, setTime] = useState(["00", "00", "00", "00"]);

  useEffect(() => {
    const setIntervalId = setInterval(() => {
      if (momantEnd.isAfter(moment())) {
        RelaTime.add(-1, "seconds");
        setTime([
          daysFromMonth.toString().padStart(2, "0"),
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

  return time;
}

export default useTimer;
