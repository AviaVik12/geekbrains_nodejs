import { Worker } from "worker_threads";

const passwordSizeInBytes = 40;

function start(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./worker.js", { workerData });
    worker.on("message", resolve);
    worker.on("error", reject);
  });
}

start(passwordSizeInBytes)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
