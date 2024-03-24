import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 80,
  strokeWidth: 6,
};

const renderTime = (dimension, time) => {
  return (
    <>
      <div className="text-xl">{time}</div>
      <div className="text-sm">{dimension}</div>
    </>
  );
};

const getTimeSeconds = time => (minuteSeconds - time) | 0;
const getTimeMinutes = time => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = time => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = time => (time / daySeconds) | 0;

const Timer = ({ endUTCTime }) => {
  const stratTime = Date.now() / 1000;
  const endTime = new Date(endUTCTime).getTime() / 1000;

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
    <div className="flex justify-around items-center py-4 space-x-2 text-center font-sans">
      <CountdownCircleTimer
        {...timerProps}
        colors="#7E2E84"
        duration={daysDuration}
        initialRemainingTime={remainingTime}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>{renderTime("days", getTimeDays(daysDuration - elapsedTime))}</span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#D14081"
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={totalElapsedTime => ({
          shouldRepeat: remainingTime - totalElapsedTime > hourSeconds,
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>{renderTime("hours", getTimeHours(daySeconds - elapsedTime))}</span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#EF798A"
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={totalElapsedTime => ({
          shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds,
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>{renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))}</span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#218380"
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={totalElapsedTime => ({
          shouldRepeat: remainingTime - totalElapsedTime > 0,
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>{renderTime("seconds", getTimeSeconds(elapsedTime))}</span>
        )}
      </CountdownCircleTimer>
    </div>
  );
};

export default Timer;
