// import fs from "fs";
const fs = require("fs");

const data =
  '\n127.0.0.1 - - [22/NOV/2022:11:10:15 -0300] "GET /sitemap.xml HTTP/1.1" 200 0 "-" "curl/7.47.0"';

fs.writeFile("./access.log", data, { flag: "a" }, console.error);
