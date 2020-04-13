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
  //------- множественный 
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
  // ! Map, Set, WeakMap, WeakSet
  function slice(str, start, end) {
    return Array.from(str).slice(start, end).join('');
  }

  let str = '➸➸➸';

  alert(slice(str, 1, 3)); // ➸➸ 

  // а вот встроенный метод не поддерживает суррогатные пары
  alert(str.slice(1, 3)); // мусор (две части различных суррогатных пар)

}