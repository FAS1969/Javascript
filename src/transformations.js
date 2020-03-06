'use strict'
{
  function squareDigits(num) {
    return (num.toString().split('').map((e) => Math.pow(e, 2).toString()).join(''))
  }
  console.log(squareDigits(9119));


  //y = false, true; //???
  //console.log(y)
  console.log((() => { return false, true })());

  //--------------------- повторяет символ столько раз какой его индекс в строке +1
  function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
  }
  console.log(accum('abcd'));//A-Bb-Ccc-Dddd

  //--- ищет нечетный элемент массива
  function findOutlier(integers) {
    let arr = integers.map((elem) => elem % 2 == 0 ? 1 : 0)
    if (arr.reduce((prev, curr) => prev + curr) === 1)
      return integers[arr.indexOf(1)];
    else
      return integers[arr.indexOf(0)]
  }
  console.log(findOutlier([0, 1, 2, 6, 8, 10, 5, 12]));
}