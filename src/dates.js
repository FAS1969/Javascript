'use strict'
{
  console.clear();
  const myDate = "26-02-2012".split("-");
  const newDate = myDate[1] + "/" + myDate[0] + "/" + myDate[2];
  console.log(new Date(newDate).getTime()); //will alert 1330210800000

  //! Замер временных промежутков
  //первый вариант
  const { performance } = require('perf_hooks'); //для node.js
  const t0 = performance.now();
  for (let i = 0; i < 10000; i++) {
    // какой-то код
  }
  const t1 = performance.now();
  console.log(t1 - t0, 'milliseconds');
  //второй вариант
  console.time()
  for (let i = 0; i < 10000; i++) {
    // какой-то код
  }
  console.timeEnd();
}