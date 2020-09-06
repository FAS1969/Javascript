'use strict'
/* jshint esversion: 9 */
{
  (() => {
    const undefined = "foo"; //! можно переопределить void 0 вернет всегда undefined
    console.log(undefined, typeof undefined); // "foo", "string"
    console.log(void 0, typeof void 0); // undefined, "undefined"
  })();
  // ! **********  BigInt  *******
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
  // ! **********  Number  *******
  //--------------- все выражения истина
  console.group('--- Number.isNaN');
  console.log('Number.isNaN(NaN)', Number.isNaN(NaN) === true);
  console.log('Number.isNaN(null)', Number.isNaN(null) === false);
  console.log('Number.isNaN(undefined)', Number.isNaN(undefined) === false);
  console.log('Number.isNaN({})', Number.isNaN({}) === false);
  console.log('Number.isNaN(\'0 / 0\')', Number.isNaN('0/0') === false);
  console.log('Number.isNaN(\'hello\')', Number.isNaN('hello') === false);
  console.groupEnd();
  let numTest = 1.005;
  console.log(Math.round(numTest * 100) / 100); // ? неправильно
  console.log(Number(Math.round(numTest + 'e' + 2) + 'e-' + 2)); // ! правильно
  console.log(numTest.toFixed(2)); // ? неправильно
  const x = 0.2;
  const y = 0.3;
  const z = 0.1;
  console.log(Math.abs(x - y + z) == 0);
  console.log(Math.abs(x - y + z) < Number.EPSILON);
  /* //  ! браузер
    console.group('--- window.isNaN');
    console.log('window.isNaN(NaN)', window.isNaN(NaN) === true);
    console.log('window.isNaN(null)', window.isNaN(null) === false);
    console.log('window.isNaN(undefined)', window.isNaN(undefined) === true);
    console.log('window.isNaN({})', window.isNaN({}) === true);
    console.log('window.isNaN(\'0 / 0\')', window.isNaN('0/0') === true);
    console.log('window.isNaN(\'hello\')', window.isNaN('hello') === true);
    console.groupEnd();
  */
  console.group('--- функции');
  console.log(isFinite("15")); // true только если число
  console.log(isFinite(0xFE)); //true
  console.log(isFinite("\u00A9"));//false
  console.log('\u{20331} - ', isFinite('\u{20331}')); //false
  console.log(isFinite(Infinity)); //false
  console.log(Object.is(NaN, NaN)); //true
  console.log(Object.is(0, -0)); //false
  console.groupEnd();
}
