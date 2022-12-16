// import fs from "fs";
// import { Transform } from "stream";
const fs = require("fs");
const Transform = require("stream");

const readStream = new fs.ReadStream("./access.log");
const writeStream = fs.createWriteStream("./access_ip_protect.log", {
  flags: "a",
});

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    const editedChunk = chunk
      .toString()
      .replace(/((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}/g, "*.*.*.*");

    this.push(editedChunk);

    callback(editedChunk);
  },
});

readStream.pipe(transformStream).pipe(writeStream);
