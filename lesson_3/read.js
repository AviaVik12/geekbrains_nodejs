// import fs from "fs";
const fs = require("fs");

fs.readFile("./access.log", { encoding: "utf-8" }, (error, data) => {
  console.log(data);
});
