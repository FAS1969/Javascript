'use strict'
{
  const rtfEspanol = new Intl.RelativeTimeFormat('es', {
    numeric: 'auto'
  });
  const rtfRussian = new Intl.RelativeTimeFormat('ru', {
    numeric: 'auto'
  });
  console.log(rtfEspanol.format(5, 'day')); // dentro de 5 días
  console.log(rtfEspanol.format(-5, 'day')); // hace 5 días
  console.log(rtfEspanol.format(15, 'minute'));
  console.log(rtfRussian.format(5, 'day'));
  console.log(rtfRussian.format(-5, 'day'));
  console.log(rtfRussian.format(15, 'minute'));
  //-------------------------
  var locales = ['en-US', 'ru', 'en-CA', 'ar-EG', 'ja-JP', 'pt-PT'];
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  var instance = new Intl.Collator('ru');
  const date = new Date();

  const formatter2 = new Intl.DateTimeFormat('en-us', options);
  console.log(formatter2.format(date)); // December 22, 2017

  const formatter1 = new Intl.DateTimeFormat('ru', options);
  console.log(formatter1.format(date)); // 22 de diciembre de 2017
  console.log(date.toLocaleString('ru', options));

  var options1 = { localeMatcher: 'lookup' };
  console.log(Intl.DateTimeFormat.supportedLocalesOf(locales, options1).join(', '));

  /*  function squareDigits(num){
    console.log(num.toString().split(''));
    return parseInt(num.toString().split('').map((e) => Math.pow(e).toString()).join(''))
  }
  console.log(squareDigits(9119));
  
  
  y = false, true; 
  console.log(y)
  console.log((()=> {return false, true})()); 
  
  
  function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
  }
  console.log(accum('abcd'));
  
  
  function findOutlier(integers){
      let arr = integers.map((elem) => elem % 2 == 0 ? 1 : 0)
      if (arr.reduce((prev, curr) => prev+curr) === 1)
        return integers[arr.indexOf(1)];
      else
        return integers[arr.indexOf(0)]
    }
    console.log(findOutlier([2,6,8,10,3]));*/
}