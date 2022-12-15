const EventEmitter = require("events");

const [hour, day, month, year] = process.argv[2].split("-");
const dateInFuture = new Date(Date.UTC(year, month - 1, day, hour));
const emitter = new EventEmitter();

/**
 * Function outputs / ends the timer
 * @param {Date} dateInFuture
 */
const showRemainingTime = (dateInFuture) => {
  const dateNow = new Date();

  if (dateNow >= dateInFuture) {
    emitter.emit("timerEnd");
  } else {
    console.clear();
    console.log(getPrettyTime((dateInFuture - dateNow) / 1000) + " left");
  }
};

/**
 * Date format
 */
const getPrettyTime = (seconds) => {
  const arr = [
    Math.floor(seconds % 60),
    Math.floor((seconds / 60) % 60),
    Math.floor((seconds / (60 * 60)) % 24),
    Math.floor(seconds / (60 * 60 * 24)),
  ];

  return `${arr.pop()} days ${arr.pop()} hours ${arr.pop()} minutes ${arr.pop()} seconds`;
};

/**
 * Function ends the timer
 * @param {Number} timerId
 */
const showTimerDone = (timerId) => {
  clearInterval(timerId);
  console.log("Time is up!");
};

const timerId = setInterval(() => {
  emitter.emit("timerTick", dateInFuture);
}, 1000);

emitter.on("timerTick", showRemainingTime);
emitter.on("timerEnd", () => {
  showTimerDone(timerId);
});
