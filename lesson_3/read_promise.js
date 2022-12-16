// import fs from "fs";
const fs = require("fs");
const fsp = fs.promises;

fsp.readFile("./access.log", { encoding: "utf-8" }).then(
  (data) => console.log(data),
  (error) => console.log(error)
);
