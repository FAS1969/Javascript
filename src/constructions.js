'use strict'
{
  //import * as fs from 'fs';
  /*  const read = async function (fname) {
      return new Promise((resolve, reject) => {
        readFile(fname, (err, content) => {
          if (err) return reject(err);
          resolve(content.toString());
        });
      });
    }

      (async () => {
        let files = ['file1.json', 'file2.json'];

        for (let i = 0; i < files.length; i++) {
          let fcontent = await read(files[i]);
          console.log(fcontent);
          console.log("-------");
        }
      })();
  */
  const myError = new Error('please improve your code');
  try {
    throw myError;
  } catch (err) {
    console.log(err.name, ' *********** ', err.message);
    console.error(err.stack); // в консоль попадает сообщение об ошибке и стек ошибки
  } finally {
    console.log('finally'); // этот код будет выполнен в любом случае
  }
  //------- возведение в степень
  console.group("********возведение в степень********");
  console.log(2 ** 2); // 4
  console.log(3 ** 2); // 9
  console.log(3 ** 3); // 27
  console.groupEnd();
  //------- консольная таблица
  console.group("********console.table********");
  console.table({ a: 5, b: 'sdff' })
  console.groupEnd();
  //------- функции
  const add = a => b => a + b;
  console.log(add(3)(5));
  //------- array
  console.group("********array********");
  //Array.prototype.includes : (match: any, offset?: Int) => boolean
  const arrr = [1, 2, 3, 4, 6, 8];
  console.log(arrr.includes(2));  //true
  console.log(arrr.includes(2, 3));  //false
  console.groupEnd();
  //------- closures (замыкания)
  console.group("********closures********");
  var globalVar = 'global'
  var outerVar = 'outer'

  function outerFunc(outerParam) {
    function innerFunc(innerParam) {
      console.log("Closures - ", globalVar, outerParam, innerParam)
    }
    return innerFunc
  }

  const x = outerFunc(outerVar)
  outerVar = 'outer-2'
  globalVar = 'guess'
  x('inner')

  const counter = (() => {
    let i = 0;
    return () => ++i;
  })();
  console.log(counter(), counter(), counter());
  console.groupEnd();
  //------- function
  console.group("********function********");
  //logParams самовызываемая ф-ция не доступная нигде
  var logParams = (function (...params) {
    params.forEach(element => {
      console.log(element);
    });
  })('aa', 'bb', 'cc', 1, 2);
  console.groupEnd();
  //------- обход объекта
  console.group("********обход объекта********");
  const myMap = {
    uno: 1,
    dos: 2,
    tres: 3
  };
  for (let key in myMap) {
    console.log(key, "=", myMap[key]);
  }
  for (let k in "Hello!") {
    console.log(k);
  }
  for (let k of "Hello!") {
    console.log(k);
  }
  function multiply(multiplier, ...theArgs) { return theArgs.map(x => multiplier * x); }
  let arr = multiply(10, 1, 2, 3); console.log(arr); // [2, 4, 6]
  console.groupEnd();
  //------- оператор with
  console.group("********оператор with********");
  console.log("не рекомендован")
  /*  with (myMap) {
      console.log(uno);
    }*/
  console.groupEnd();
  //-------Циклы
  console.group("********do while********");
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i < 3);
  console.groupEnd();
  i = 0;
  console.group("********while do********");
  while (i < 3) {
    console.log(i);
    i++;
  }
  console.groupEnd();
  console.group("********for********");
  for (let index = 0; index < 4; index++) {
    console.log(index);

  }
  console.groupEnd();
  //------- множественный выбор
  let xX = 'value1';
  switch (xX) {
    case 'value1':
      console.log('********switch - ', 'value1');
      break;
    case 'value2':
      console.log('********switch - ', 'value2');
      break;
    default:
      console.log('********switch - ', 'default');
      break;
  }
  let letter;
  let s = 'bdfght';
  switch (true) {
    case /^[aeiou]{1}.*/i.test(s):
      letter = "A"
      break;
    case /^[bcdfg]{1}.*/i.test(s):
      letter = "B"
      break;
    case /^[hjklm]{1}.*/i.test(s):
      letter = "C"
      break;
    case /^[npqrstvwxyz]{1}.*/i.test(s):
      letter = "D"
      break;
  }
  console.log('********switch сложный - ', letter);
  // !-------- Map, Set, WeakMap, WeakSet
  function slice(str, start, end) {
    return Array.from(str).slice(start, end).join('');
  }

  let str = '➸➸➸';

  console.log(slice(str, 1, 3)); // ➸➸

  // а вот встроенный метод не поддерживает суррогатные пары
  console.log(str.slice(1, 3)); // мусор (две части различных суррогатных пар)

}
