import os from "os";
import cp from "child_process";

const numberOfCPUs = os.cpus().length;

console.log(`Master ${process.pid} is running...`);

let i = 0;
while (i < numberOfCPUs) {
  cp.fork("./worker.js", [i]);
  i++;
}
