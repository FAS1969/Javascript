'use strict'
{
  console.clear();
  //! -------Итераторы
  console.group("*********** Итераторы")
  var arr = [11, 12, 13];
  var itr = arr[Symbol.iterator]();
  console.log(itr.next()); // { value: 11, done: false }
  console.log(itr.next()); // { value: 12, done: false }
  console.log(itr.next()); // { value: 13, done: false }
  console.log(itr.next()); // { value: undefined, done: true }
  // --- итератор сам объект 
  /* 
  не можем использовать этот объект в двух
  параллельных циклах  for..of : у них будет общее текущее состояние итерации, потому
  что теперь существует лишь один итератор – сам объект
  */
  const collection = {
    a: 10,
    b: 20,
    c: 30,
    [Symbol.iterator]() {
      const values = Object.keys(this);
      let i = 0;
      return {
        next: () => {
          return {
            value: this[values[i++]],
            done: i > values.length
          }
        }
      };
    }
  };
  const iterator11 = collection[Symbol.iterator]();
  console.log(iterator11.next());    // → {value: 10, done: false}
  console.log(iterator11.next());    // → {value: 20, done: false}
  console.log(iterator11.next());    // → {value: 30, done: false}
  console.log(iterator11.next());    // → {value: undefined, done: true}
  //------------- итератор вне объекта
  let range1 = {
    from: 1,
    to: 5
  };

  range1[Symbol.iterator] = function () {

    // ...она возвращает объект итератора: 
    // 2. Далее, for..of работает только с этим итератором, запрашивая у него новые значения 
    return {
      current: this.from,
      last: this.to,

      // 3. next() вызывается на каждой итерации цикла for..of 
      next() {
        // 4. он должен вернуть значение в виде объекта {done:.., value :...} 
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  };

  // теперь работает!
  for (let num of range1) {
    console.log(num); // 1, затем 2, 3, 4, 5
  }
  console.groupEnd();
  //! -------Генераторы
  console.group("*********** Генераторы")
  const generatorFunction = function* () {
    yield;
  };
  const iterator = generatorFunction();
  console.log(iterator.next());// Object {value: undefined, done: false}
  console.log(iterator.next());// Object {value: undefined, done: true}
  //---
  const generatorFunction1 = function* () {
    console.log(yield); //bar
    console.log(yield); //bar1
  };
  const iterator1 = generatorFunction1();
  iterator1.next('foo');
  iterator1.next('bar');
  iterator1.next('bar1');
  //---
  const generatorFunction2 = function* () {
    yield 1;
    yield 2;
    yield 3;
    return 4;
  };
  const iterator2 = generatorFunction2();
  const fromIterable = [...iterator2];
  console.log(fromIterable); //[ 1, 2, 3 ]
  //---
  function* gener(i) {
    yield i;
    yield i * 2;
  }
  const gg = gener(10);
  const gg1 = gener(100);
  console.log(gg.next().value);
  console.log(gg1.next().value);
  console.log(gg.next().value);
  console.log(gg1.next().value);
  //----
  const infiniteNumbers = function* () {
    /*var n = 1;
    while (true) {
        yield n++;
    }*/
    yield* [1, 2, 3];
  };
  var numbers = infiniteNumbers(); // возвращает перебираемый объект
  console.group("Генераторы");
  //do {} while (!numbers.next().done);
  for (let value of infiniteNumbers()) {
    console.log(value);
  }
  console.groupEnd();

  const generateSequence = function* (start, end) {
    for (let i = start; i <= end; i++) yield i;
  };
  const generateAlphaNum = function* () {
    // 0..9
    yield* generateSequence(48, 57);
    // A..Z
    yield* generateSequence(65, 90);
    // a..z
    yield* generateSequence(97, 122);
  };

  let str = "";
  for (let code of generateAlphaNum()) {
    str += String.fromCharCode(code);
  }
  console.log(str); // 0..9A..Za..z

  var p = new Promise(function (resolve, reject) {
    resolve(1);
  });

  var eventuallyAdd1 = val => {
    return new Promise(function (resolve, reject) {
      setTimeout(resolve(val + 1), 2000);
    });
  };

  p.then(eventuallyAdd1)
    .then(eventuallyAdd1)
    .then(val => console.log(val)); // 3

  console.log("dfsdfsdfs");

  let generator = generateSequence(1, 5);
  let value = generator.next();

  while (!value.done) {
    console.log(value.value);
    value = generator.next();
  }
  console.groupEnd();
  //-------Запуск последовательности callback-ов
  const foo = (name, callback) => {
    setTimeout(() => {
      callback(name);
    }, 1000);
  };
  /**
  * Преобразует функцию, которая принимает несколько аргументов в
  * функция, которая принимает только последний аргумент 
  * исходной функции.
  *
  * @param {Function}
  * @param {...*}
  */
  const curry = (method, ...args) => {
    return (callback) => {
      args.push(callback);
      return method.apply({}, args);
    };
  };
  /**
  * Инициирует генератор и выполняет итерацию по каждой 
  * предоставленной функции через оператора yield.
  * 
  * @param {Function}
  */
  const controller = (generator) => {
    const iterator = generator();
    const advancer = (response) => {
      // Advance the iterator using the response of an asynchronous callback.
      const state = iterator.next(response);
      if (!state.done) {
        // Make the asynchronous function call the advancer.
        state.value(advancer);
      }
    }
    advancer();
  };
  controller(function* () {
    const a = yield curry(foo, 'a');
    const b = yield curry(foo, 'b');
    const c = yield curry(foo, 'c');
    console.log(a, b, c);
  });

  //---------- fibonacci
  //Бесконечный ряд
  function* fibonacci() {
    let previous = 0
    let i = 1;
    while (true) {
      [i, previous] = [previous, i + previous]
      yield previous;
    }
  }
  //взять первые n элементов последовательности
  function* take(iterable, n) {
    let i = 0;
    for (let value of iterable) {
      yield value;
      i++;
      if (i >= n) { break; }
    }
  }
  //взять n-й элемент последовательности
  function takeElem(iterable, n) {
    let i = 0;
    for (let value of iterable) {
      i++;
      if (i >= n) { return value; }
    }
  }
  //const arrFib = [...take(fibonacci(), 30)];
  //console.log(arrFib[29]);
  console.log([...take(fibonacci(), 30)][29]);
  console.log(takeElem(fibonacci(), 30));
  //
  const obj = {
    a: 'aaaa',
    b: Symbol(),
    c: 125,
    d: () => { return 'aaa' },
    f: [1, 2, 3]
  }
  console.group("Цикл по св-ам объекта");
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(obj[key]);
    }
  }
  console.groupEnd();
  console.group("Цикл по массиву");
  for (const key of obj.f) {
    console.log(key);
  }
  console.groupEnd();
}