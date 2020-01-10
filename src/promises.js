{
  const promises = function () {
    const successfulPromise = timeout(1000).then(result => `success: ${result}`);
    const failingPromise = timeout(200, true).then(null, error =>
      Promise.reject(`failure: ${error}`),
    );
    const recoveredPromise = timeout(300, true).then(null, error =>
      Promise.resolve(`failed and recovered: ${error}`),
    );
    successfulPromise.then(log, logError);
    failingPromise.then(log, logError);
    recoveredPromise.then(log, logError);
  };
  function log(...args) {
    console.log(...args)
  }

  function logError(...args) {
    console.error(...args)
  }

  function asyncAwaits() {
    async function successfulAsyncAwait() {
      const result = await timeout(100)
      return `success: ${result}`
    }

    async function failedAsyncAwait() {
      const result = await timeout(200, true)
      return `failed: ${result}`
    }
    async function recoveredAsyncAwait() {
      let result
      try {
        result = await timeout(300, true)
        return `failed: ${result}` // this would not be executed
      } catch (error) {
        return `failed and recovered: ${error}`
      }
    }

    successfulAsyncAwait().then(log, logError)
    failedAsyncAwait().then(log, logError)
    recoveredAsyncAwait().then(log, logError)
  }

  // This is the mothership of all things asynchronous
  const timeout = function (duration = 0, shouldReject = false) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldReject) {
          reject(`rejected after ${duration}ms`);
        } else {
          resolve(`resolved after ${duration}ms`);
        }
      }, duration);
    });
  };

  promises();
  asyncAwaits();

}
