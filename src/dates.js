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
  let dt_tm = new Date();
  console.log(dt_tm.toDateString())
  console.log(dt_tm.toLocaleDateString('cs-CZ'))
  console.log(dt_tm.toLocaleTimeString('cs-CZ'))

  String.prototype.toDate = function (format) {
    var normalized = this.replace(/[^a-zA-Z0-9]/g, '-');
    var normalizedFormat = format.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-');
    var formatItems = normalizedFormat.split('-');
    var dateItems = normalized.split('-');

    var monthIndex = formatItems.indexOf("mm");
    var dayIndex = formatItems.indexOf("dd");
    var yearIndex = formatItems.indexOf("yyyy");
    var hourIndex = formatItems.indexOf("hh");
    var minutesIndex = formatItems.indexOf("ii");
    var secondsIndex = formatItems.indexOf("ss");

    var today = new Date();

    var year = yearIndex > -1 ? dateItems[yearIndex] : today.getFullYear();
    var month = monthIndex > -1 ? dateItems[monthIndex] - 1 : today.getMonth() - 1;
    var day = dayIndex > -1 ? dateItems[dayIndex] : today.getDate();

    var hour = hourIndex > -1 ? dateItems[hourIndex] : today.getHours();
    var minute = minutesIndex > -1 ? dateItems[minutesIndex] : today.getMinutes();
    var second = secondsIndex > -1 ? dateItems[secondsIndex] : today.getSeconds();

    return new Date(year, month, day, hour, minute, second);
  };
  let strDateTime = '28. 4. 2020 8:03:46'.replace(/(\W)*\.\W/g, '.');
  let strDateTime1 = '28.4.2020 8:03:46';
  let dtDate = new Date(strDateTime1);
  console.log(dtDate);
  console.log('***********', strDateTime);
  console.log(strDateTime.toDate("dd/mm/yyyy hh:ii:ss").toLocaleDateString('cs-CZ'));
  console.log(strDateTime.toDate("dd/mm/yyyy hh:ii:ss").toLocaleTimeString('cs-CZ'));
  //Date str
  console.log(strDateTime.substr(0, strDateTime.indexOf(' ')));
  //Time str
  console.log(strDateTime.substr(strDateTime.indexOf(' ') + 1));
}
