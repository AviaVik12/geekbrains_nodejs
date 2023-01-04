import http from "http";
import fs from "fs";
import path from "path";

const host = "localhost";
const startedPort = 3000;
const shift = parseInt(process.argv[2]);
const port = startedPort + shift;

const server = http.createServer((request, response) => {
  console.log(`Worker ${process.pid} handles this request...`);

  const filePath = path.join(process.cwd(), "./access.log");

  const readStream = fs.createReadStream(filePath, {
    encoding: "utf-8",
    highWaterMark: 64,
  });

  readStream.on("data", (chunk) => {
    console.log(chunk);
    response.write(chunk);
  });

  readStream.on("end", () => {
    response.end();
  });
});

server.listen(port, host, () =>
  console.log(`Server running at http://${host}:${port}`)
);
