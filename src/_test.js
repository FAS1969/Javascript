'use strict'
// @ts-check
{
  console.clear();
  const o = {};

  console.log("prop" in o === o.hasOwnProperty("prop"));
  console.log("toString" in o === o.hasOwnProperty("toString"));

  var obj = { a: 2 };
  function f(aobj) {
    aobj.a = 5;
    console.log(aobj);
    aobj = { a: 3 };
    console.log(aobj);
  }
  f(obj);
  console.log(obj);

  console.log(1 / 0); //Infinity
  console.log(parseInt(1 / 0, 19)); // 18==i

  let itsAsEasyAs = 'abc';
  itsAsEasyAs = 123;
}