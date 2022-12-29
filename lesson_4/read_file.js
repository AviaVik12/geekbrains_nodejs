// const fs = require("fs");
// const path = require("path");
import fs from "fs";
import path from "path";

const fileName = process.argv[2];
// const __dirname = "/mnt/v/programming/geek_brains/second_quarter/node/lesson_4";

fs.readFile(path.join(__dirname, fileName), "utf-8", (error, data) => {
  console.log(data);
});
