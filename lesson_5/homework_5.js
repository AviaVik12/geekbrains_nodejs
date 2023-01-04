// Consolas, 'Courier New', monospace

import http from "http";
import fs from "fs";
import path from "path";
import { Transform } from "stream";

const host = "localhost";
const port = 3000;

const list = [];
const fsp = fs.promises;

const links = (array, curlUrl) => {
  if (curlUrl.endsWith("/")) {
    curlUrl = curlUrl.substring(0, curlUrl.length - 1);
  }

  let listItem = "";

  for (const item of array) {
    listItem += `<li><a href="${curlUrl}/${item}"></a></li>`;
  }

  return listItem;
};

const server = http.createServer((require, response) => {
  if (require.method === "GET") {
    const url = require.url.split("?")[0];
    const curlPath = path.join(process.cwd(), url);

    fs.stat(curlPath, (error, stats) => {
      if (!error) {
        if (stats.isFile(curlPath)) {
          const readStream = fs.createReadStream(curlPath, "utf-8");
          readStream.pipe(response);
        } else {
          fsp
            .readdir(curlPath)
            .then((files) => {
              if (url !== "/") {
                files.unshift("..");
              }
              return files;
            })
            .then((data) => {
              const filePath = path.join(process.cwd(), "./homework_5.html");
              const readStream = fs.createWriteStream(filePath);
              const transformStream = new Transform({
                transform(chunk, encoding, callback) {
                  const listItem = links(data, url);
                  this.push(chunk.toString().replace("#filelinks", listItem));
                  callback();
                },
              });

              readStream.pipe(transformStream).pipe(response);
            });
        }
      } else {
        response.end("Path does not exist!");
      }
    });
  }
});

server.listen(port, host, () => {
  console.log(`Server running at https://${host}:${port}`);
});
