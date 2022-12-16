// import fs from "fs";
const fs = require("fs");

// const readStream = new fs.ReadStream()
const readStream = fs.createReadStream("./access.log", {
  encoding: "utf-8",
  // start: 0,
  // end: 10,
  highWaterMark: 20,
});

let i = 1;
readStream.on("data", (chunk) => {
  console.log(i, chunk);
  i++;
});

readStream.on("end", () => console.log("File reading is finished"));
readStream.on("error", (error) => console.log(error.message));
