'use strict';
{
  console.clear();
  // ! **********  Symbol  *******
  const symbol1 = Symbol('my symbol');
  const symbol2 = Symbol();
  console.log(symbol1 === symbol2); // false
  //----------------- 
  const obj2 = {};
  obj2[symbol1] = 'Hello';
  obj2[symbol2] = 'World';

  console.log(obj2[symbol1]);
  console.log(obj2[symbol2]);
  console.log(symbol1);
  //----------------- 
  console.group('****** fibonacci');
  const fibonacci = {
    [Symbol.iterator]: function* () {
      let a = BigInt(1);
      let b = BigInt(1);
      let temp;

      yield b;

      while (true) {
        temp = a;
        a = a + b;
        b = temp;
        yield b;
      }
    }
  };

  let arr1 = [];
  let i = 0;
  for (const x of fibonacci) {
    i++;
    if (i > 50) {
      break;
    }
    arr1.push(x);
  }
  console.log(arr1.pop());
  console.groupEnd();
  //----------------- 
  console.group('****** Object и симвльные свойства');
  const getObj = function getObj() {
    const symbol = Symbol('test');
    const obj = {};
    obj[symbol] = 'test';
    obj.aa = 10;
    return obj;
  };

  const obj1 = getObj();
  //----------------- 
  console.group('****** for .. in не выводит Symbol');
  let id = Symbol("id");
  let user = {
    name: "Вася",
    age: 30,
    [id]: 123
  };
  for (let key in user) console.log(key);
  console.groupEnd();
  console.log(Object.keys(obj1)); // []
  //--------------------
  console.log(obj1[Symbol('test')]); // undefined

  // You can still get a reference to the symbol using `getOwnPropertySymbols()`
  const [symbol] = Object.getOwnPropertySymbols(obj1);
  console.log(obj1[symbol]); // 'test'
  console.log(JSON.stringify(obj1));
  console.groupEnd();
  // ! ********** Глобальные символы
  console.group('****** Глобальные символы');
  // читаем символ из глобального реестра и записываем его в переменную
  let gId = Symbol.for("global id"); // если символа не существует, он будет создан 
  // читаем его снова в другую переменную (возможно, из другого места кода)
  let gIdAgain = Symbol.for("global id");
  // проверяем -- это один и тот же символ
  console.log(gId === gIdAgain); // true
  console.log(Symbol.keyFor(gIdAgain)) // global id
  //------
  let globalSymbol = Symbol.for("name");
  let localSymbol = Symbol("name");
  console.log(Symbol.keyFor(globalSymbol)); // name, глобальный символ
  console.log(Symbol.keyFor(localSymbol)); // undefined для неглобального символа 
  console.log(localSymbol.description); // name
  console.groupEnd();
  /*
  Symbol.hasInstance
  Symbol.isConcatSpreadable
  Symbol.iterator
  Symbol.toPrimitive
  */
}