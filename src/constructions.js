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
  console.group("возведение в степень");
  console.log(2 ** 2); // 4
  console.log(3 ** 2); // 9
  console.log(3 ** 3); // 27
  console.groupEnd();
  //------- array
  console.group("array");
  //Array.prototype.includes : (match: any, offset?: Int) => boolean
  const arrr = [1, 2, 3, 4, 6, 8];
  console.log(arrr.includes(2));  //true
  console.log(arrr.includes(2, 3));  //false
  console.groupEnd();
  //------- function
  console.group("function");
  //logParams самовызываемая ф-ция не доступная нигде 
  var logParams = (function (...params) {
    params.forEach(element => {
      console.log(element);
    });
  })('aa', 'bb', 'cc', 1, 2);
  console.groupEnd();
  //------- обход объекта
  console.group("обход объекта");
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
}