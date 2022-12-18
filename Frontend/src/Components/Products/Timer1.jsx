import React from "react";
import useCountDown from "./useCountDown";

const Timer1 = () => {
  const endTime = new Date().getTime() + 360000 * 24;
  const [timeLeft, setEndTime] = useCountDown(endTime);
  const hour = Math.floor(timeLeft / 360000) % 60;
  const min = Math.floor(timeLeft / 60000) % 60;
  const sec = Math.floor(timeLeft / 1000) % 60;
  return (
    <>
      {hour}:{min}:{sec}
    </>
  );
};

export default Timer1;
