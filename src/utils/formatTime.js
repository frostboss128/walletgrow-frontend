import isEmpty from "./isEmpty";

const formatTime = (time) => {
  if (isEmpty(time)) return undefined;
  return time.slice(0, 10) + " " + time.slice(11, 19);
};

const formatLocalTime = (time) => {
  if (isEmpty(time)) return undefined;
  return time.slice(0, 19);
};

export { formatLocalTime };

export default formatTime;
