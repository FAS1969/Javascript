'use strict'
{
  console.clear();
  const o = {}

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
}