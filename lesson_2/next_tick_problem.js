let bar;

function someAsyncApiCall(callback) {
  process.nextTick(callback);
  callback();
}

someAsyncApiCall(() => {
  console.log("bar", bar);
});

bar = 1;
