import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import fs from "fs";
import path from "path";

const __dirname = "/mnt/v/programming/geek_brains/second_quarter/node/lesson_4";

const options = yargs(hideBin(process.argv))
  .usage("Usage: -p <path>")
  .option("p", {
    alias: "path",
    describe: "Path to file",
    demandOption: true,
  }).argv;

const fileName = options.path;

fs.readFile(path.join(__dirname, fileName), "utf-8", (error, data) => {
  console.log(data);
});
