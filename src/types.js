/* jshint esversion: 9 */
{
  //**********  BigInt  *******
  const a = {};
  const b = { key: "b" };
  const c = { key: "c" };
  a[b] = 123;
  a[c] = 456;
  console.log('' || 0, '-----');
  //  console.log( 1_000_000_000.1_012 );   

  const large = BigInt(9007199254740991);
  const ad = BigInt(10);// можно и так 10n;
  console.log(large + ad);
  console.log(typeof large); // bigint
  var obj = {
    fn: function () {
      console.log('this', this === obj); // true
      console.log('globalThis', globalThis); // === windows in browser
    }
  };
  obj.fn();
  // ! **********  String  *******
  // ! in strings.js
  //--------------- все выражения истина
  console.group('Number.isNaN');
  console.log('Number.isNaN(NaN)', Number.isNaN(NaN) === true);
  console.log('Number.isNaN(null)', Number.isNaN(null) === false);
  console.log('Number.isNaN(undefined)', Number.isNaN(undefined) === false);
  console.log('Number.isNaN({})', Number.isNaN({}) === false);
  console.log('Number.isNaN(\'0 / 0\')', Number.isNaN('0/0') === false);
  console.log('Number.isNaN(\'hello\')', Number.isNaN('hello') === false);
  console.groupEnd();
  console.group('window.isNaN');
  console.log('window.isNaN(NaN)', window.isNaN(NaN) === true);
  console.log('window.isNaN(null)', window.isNaN(null) === false);
  console.log('window.isNaN(undefined)', window.isNaN(undefined) === true);
  console.log('window.isNaN({})', window.isNaN({}) === true);
  console.log('window.isNaN(\'0 / 0\')', window.isNaN('0/0') === true);
  console.log('window.isNaN(\'hello\')', window.isNaN('hello') === true);
  console.groupEnd();
  //**********  Symbol  *******
  console.group('Symbol');
  const symbol1 = Symbol('my symbol');
  const symbol2 = Symbol();

  console.log(symbol1 === symbol2); // false

  const obj2 = {};
  obj2[symbol1] = 'Hello';
  obj2[symbol2] = 'World';

  console.log(obj2[symbol1]);
  console.log(obj2[symbol2]);
  console.log(symbol1);

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
    if (i > 300) {
      break;
    }
    arr1.push(x);
  }
  console.log(arr1.pop());

  const getObj = function getObj() {
    const symbol = Symbol('test');
    const obj = {};
    obj[symbol] = 'test';
    obj.aa = 10;
    return obj;
  };

  const obj1 = getObj();

  console.log(Object.keys(obj1)); // []

  // Unless you explicitly have a reference to the symbol, you can't access the
  // symbol property.
  console.log(obj1[Symbol('test')]); // undefined

  // You can still get a reference to the symbol using `getOwnPropertySymbols()`
  const [symbol] = Object.getOwnPropertySymbols(obj1);
  console.log(obj1[symbol]); // 'test'
  console.log(JSON.stringify(obj1));
  console.groupEnd();

}