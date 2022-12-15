// import EventEmitter from "events";
const EventEmitter = require("events");

const requestTypes = [
  {
    type: "send",
    payload: "to send a document",
  },
  {
    type: "receive",
    payload: "to receive a document",
  },
  {
    type: "sign",
    payload: "to sign a document",
  },
];

class Customer {
  constructor(params) {
    (this.type = params.type), (this.payload = params.payload);
  }
}

const generateIntInRange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// console.log(generateIntInRange(1, 5));

const delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
};

const generateNewCustomer = () => {
  const intervalValue = generateIntInRange(1, 5) * 1000;
  const params = requestTypes[generateIntInRange(0, 2)];

  return delay(intervalValue).then(() => new Customer(params));
};

class Handler {
  static send(payload) {
    console.log("Send request");
    console.log(`Customer needs ${payload}`);
  }
  static receive(payload) {
    console.log("receive request");
    console.log(`Customer needs ${payload}`);
  }
  static sign(payload) {
    console.log("sign request");
    console.log(`Customer needs ${payload}`);
  }
}

const emitter = new (class extends EventEmitter {})();

emitter.on("error", console.log);
emitter.on("send", Handler.send);
emitter.on("receive", () => {
  emitter.emit("error", "Receive operation - Employee got sick!");
});
emitter.on("sign", Handler.sign);

// generateNewCustomer().then((customer) =>
//   emitter.emit(customer.type, customer.payload)
// );

const run = async () => {
  const customer = await generateNewCustomer();
  emitter.emit(customer.type, customer.payload);
  run();
};

run();
