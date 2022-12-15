console.log("1");

Promise.resolve().then(() => console.log("2"));

setTimeout(() => {
  console.log("3");
  Promise.resolve().then(() => console.log("4"));
}, 0);

// new Promise((resolve, reject) => {
//   console.log("Constructor");
//   resolve(8);
// }).then(console.log);

Promise.resolve().then(() => {
  Promise.resolve().then(() => {
    console.log("5");
  });
  console.log("6");
});

console.log("7");
