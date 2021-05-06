'use strict'
{
  console.clear();

  function slow(x) {
    // здесь могут быть ресурсоёмкие вычисления
    console.log(`Called with ${x}`);
    return x;
  }

  function cachingDecorator(func) {
    let cache = new Map();

    return function (x) {
      if (cache.has(x)) {    // если кеш содержит такой x,
        return cache.get(x); // читаем из него результат
      }
      let result = func(x); // иначе, вызываем функцию
      cache.set(x, result); // и кешируем (запоминаем) результат
      return result;
    };
  }

  let slowDec = cachingDecorator(slow);

  console.log(slowDec(1)); // slow(1) кешируем
  console.log("Again: " + slowDec(1)); // возвращаем из кеша

  let worker = {
    someMethod() {
      return 1;
    },

    slow(x) {
      console.log("Called with " + x);
      return x * this.someMethod(); // (*)
    }
  };

  function cachingDecoratorForMethod(func) {
    let cache = new Map();
    return function (x) {
      if (cache.has(x)) {
        return cache.get(x);
      }
      let result = func.call(this, x); // теперь 'this' передаётся правильно
      cache.set(x, result);
      return result;
    };
  }

  worker.slow = cachingDecoratorForMethod(worker.slow); // теперь сделаем её кеширующей

  console.log(worker.slow(2)); // работает
  console.log(worker.slow(2)); // работает, не вызывая первоначальную функцию (кешируется)

}
