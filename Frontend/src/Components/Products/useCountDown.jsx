import React, { useState } from "react";
import { useEffect } from "react";

const calcTimeLeft = (t) => {
  if (!t) return 0;
  const left = t - new Date().getTime();
  if (left < 0) return 0;
  return left;
};

export default function useCountDown(endTime) {
  const [end, setEndTime] = useState(endTime);
  const [timeLeft, setTimeLeft] = useState(() => calcTimeLeft(end));
  useEffect(() => {
    setTimeLeft(calcTimeLeft(end));
    const time = setInterval(() => {
      const targetLeft = calcTimeLeft(end);
      setTimeLeft(targetLeft);

      if (targetLeft === 0) {
        clearInterval(time);
      }
    });
    return () => clearInterval(time);
  }, [end]);

  return [timeLeft, setEndTime];
}
