// -------------------------- Promises -------------------------- //

// A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.

// Three stages of a promise 1. Pending 2. Fulfilled 3. Rejected

function promise(complete) {
  return new Promise(function (resolve, reject) {
    //can be any variable name
    if (complete) {
      resolve("success"); // these are no callback functions
    } else {
      reject("failure");
    }
  });
}
// we make two functions on the basis of the fullfillment of the promise

let onFullfilled = (result) => {
  console.log(result);
};

let onRejected = (error) => {
  console.log(`Error: ${error}`);
};

// so as these are not the callback functions so we have to attach them to the promise object
promise(true).then(onFullfilled).catch(onRejected);

// console.log(promise(true));

// To reduce the number of callbacks, we can use the Promise.all([promise1, promise2, promise3]) method to run multiple promises concurrently and wait for all of them to resolve.

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 1000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 2000);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3 resolved");
  }, 3000);
});

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log(error);
});

// Even if a single promise is rejected, the catch block will be executed.
// We can also function in the promise to reduce the size of the code.

