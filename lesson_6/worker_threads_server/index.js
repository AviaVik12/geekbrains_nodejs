import os from "os";
import { Worker } from "worker_threads";

const numberOfCPUs = os.cpus().length;

let i = 0;
while (i < numberOfCPUs) {
  const workerData = { portOfset: i };
  const worker = new Worker("./worker.js", { workerData });
  worker.on("message", console.log);
  i++;
}
