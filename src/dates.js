'use strict'
{
  console.clear();
  //! Угол между стрелками часов
  console.group("****** Угол между стрелками часов 24:05")
  const hour = 24;
  const min = 5;
  const angleMin = 6 * min; // 360 * min / 60;
  const angleHour = 0.5 * (15 * (hour % 12) + min); // 360 * (hour % 12) / 12 + min / 2;
  console.log('angleMin - ', angleMin)
  console.log('angleHour - ', angleHour)
  const angleDiff = Math.abs(angleHour - angleMin);
  console.log('Разница - ', Math.min(angleDiff, 360 - angleDiff))
  console.groupEnd();

  console.log('День недели - ', ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][(new Date('10/11/2019')).getDay()]);
  const myDate = "26-02-2012".split("-");
  const newDate = myDate[1] + "/" + myDate[0] + "/" + myDate[2];
  console.log((new Date(newDate).getTime())); //will alert 1330210800000
  console.log(new Date("2012-03-08").getTime() == new Date("2012-03-08").getTime());

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

  // ! ********************* сортировка массива дат
  let arr = [{ date: '23.01.2015' }, { date: '10.01.2017' }, { date: '05.11.2016' }, { date: '21.13.2002' }];

  arr.forEach(function (item) {
    let arrDate = item.date.split('.');
    let date = new Date(Number(arrDate[2]), Number(arrDate[1]), Number(arrDate[0]));
    item.time = date.getTime();
  });

  arr = arr.sort(function (a, b) {
    if (a.time - b.time < 0) {
      return false;
    } else {
      return true;
    }
  });

  var res = arr.map(function (item) {
    return { date: item.date };
  });

  console.log(res);

}
