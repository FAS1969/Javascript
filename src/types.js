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
  console.group('String');
  const aa = 'AAA';
  console.log(`Это длинная строка с //\\ - вывод спецсимвола
  ""  ' с разными символами!@ — ŤŽĆ и переводом строки. \${dffd}`);
  console.log(`\t\tdfsdkfsfl fjsdlfsl ${aa} sdf`);
  let className = 0.1 + 0.2;  // 0.30000000000000004
  var num = 8;
  var num = 10;
  console.log(`box ${className.toFixed(1)}
  dddd ${num}`);

  const str = 'Hello world, welcome to the javascript.';
  console.log(str.startsWith('Hello')); // true
  console.log(str.startsWith('Help'));  // false
  console.log(str.endsWith('javascript.')); // true
  console.log(str.endsWith('hello'));       // false
  console.log(str.includes("world")); // true
  console.log(str.includes("test"));  // false
  //---- подстрока
  const str1 = '012345678901234567890abc';
  console.log(str1.substr(1, 3));    //123
  console.log(str1.substring(1, 3)); //12
  console.log(str1.slice(1, 3));     //12
  console.log(str1.slice(-3, -1));   //ab
  // ! ************ Вывод Юникод, hex символа 
  console.log("\u2764\uFE0F");
  console.log("\xAE");
  console.log('\u{1D306}'); //ECMAScript 6: Unicode code point escapes
  console.log("Ich \u2665 B\xFCcher");
  // ! ********** Literals ****************/
  const olives = 0b0001;
  const ham = 0b0010;
  const pineapple = 0b0100;
  const artechoke = 0b1000;

  const pizza_ham_pineapple = pineapple | ham;
  const pizza_four_seasons = olives | ham | artechoke;
  console.log(pizza_ham_pineapple); //6
  console.log(pizza_four_seasons);  //11
  console.groupEnd();
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