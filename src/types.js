'use strict'
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

}