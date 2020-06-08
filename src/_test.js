'use strict'
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

  let newList = [1, 2, 3].push(4);
  console.log(newList);

  function testForEach(x) {
    console.time('test-forEach');
    const res = [];
    x.forEach((value, index) => {
      res.push(value / 1.2 * 0.1);
    });

    console.timeEnd('test-forEach')
    return res;
  }

  function testFor(x) {
    console.time('test-for');
    const res = [];
    for (let i = 0; i < x.length; i++) {
      res.push(x[i] / 1.2 * 0.1);
    }

    console.timeEnd('test-for')
    return res;
  }
  const x = new Array(100000).fill(Math.random());
  testForEach(x);
  testForEach(x);
  testFor(x);
  testFor(x);
  console.log([15, 8, 4].map(parseInt));
} 