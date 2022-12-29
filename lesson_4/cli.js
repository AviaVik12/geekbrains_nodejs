#!/c/Program Files/nodejs/node
import inquirer from "inquirer";
import fsp from "fs/promises";
import path from "path";

const __dirname = "/mnt/v/programming/geek_brains/second_quarter/node/lesson_4";

fsp
  .readdir(path.join(__dirname))
  .then(async (inDir) => {
    const list = [];
    for (const item of inDir) {
      const source = await fsp.stat(item);
      if (source.isFile()) {
        list.push(item);
      }
    }
    return list;
  })
  .then((choices) => {
    return inquirer
      .prompt({
        name: "fileName",
        type: "list",
        message: "Choose file",
        choices,
      })
      .then(({ fileName }) => fsp.readFile(fileName, "utf-8"))
      .then(console.log);
  });
