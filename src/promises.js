'use strict'
{
  //! This is the mothership of all things asynchronous
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
  //! **************************
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

  promises();
  asyncAwaits();

  //! ****************** */
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve('HURA!')
    }, 1000);
  });
  let promiseErr = new Promise(function (resolve, reject) {
    setTimeout(() => {
      reject(new Error('SMULA!'))
    }, 1000);
  });
  promise.finally(() => { console.group("Test Promise"); console.log('finally1') })
    .then(result => { console.log(result); throw new Error('Ошибка в then') }).catch(console.log).finally(() => console.log('finally2'));
  promiseErr.finally(() => console.log('finally3')).then(
    result => console.log(result), // не будет запущена
    error => console.log(error))
    .catch(() => { console.log('не работает') })
    .finally(() => { console.log('finally4'); console.groupEnd(); });
  async function aaa(val) {
    await setTimeout(() => {
      console.log('timeout 3000');
    }, 3000);
    console.log('aaa', val);
  }
  (async function bbb() { await aaa(); console.log('bbb') })();
  aaa().then(console.log('then'));
  const someArray = [1, 2, 3, 4, 5, 6];
  (async function foo() {
    for (let item of someArray) {
      await aaa(item);
    }
  })();
  console.log('-------------End main process');
}
