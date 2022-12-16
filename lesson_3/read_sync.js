// import fs from "fs";
const fs = require("fs");

const data = fs.readFileSync("./access.log", { encoding: "utf-8" });
console.log(data);
