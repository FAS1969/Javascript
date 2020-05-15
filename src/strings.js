'use strict'
{
  console.clear();
  const testStr = 'MyTestingString';
  console.log(testStr.slice(2, 8) + ' ' + testStr.substr(2, 8) + ' ' + testStr.substring(2, 8));//Testin TestingS Testin
  /*
    !     метод            |         выбирает…                       |            отрицательные значения
    slice(start, end)      |  от  start  до  end(не включая  end)    |    можно передавать отрицательные значения
    substring(start, end)  |  между  start  и  end                   |    отрицательные значения равнозначны  0
    substr(start, length)  |  length  символов, начиная от  start    |    значение  start  может быть отрицательным
  */
  console.group("********** работа со строкой");
  const aa = 'AAA';
  console.log(`Это длинная строка с //\\ - вывод спецсимвола
  ""  ' с разными символами!@ — ŤŽĆ и переводом строки. \${dffd}`);
  console.log(`\t\tdfsdkfsfl fjsdlfsl ${aa} sdf`);
  let className = 0.1 + 0.2;  // 0.30000000000000004
  var num = 8;
  var num = 10;
  console.log(`box ${className.toFixed(1)}
  dddd ${num}`);

  const str = 'Hello world, welcome to the javascript.';
  console.log(str.startsWith('Hello')); // true
  console.log(str.startsWith('Help'));  // false
  console.log(str.endsWith('javascript.')); // true
  console.log(str.endsWith('hello'));       // false
  console.log(str.includes("world")); // true
  console.log(str.includes("test"));  // false
  console.log('myteststring'.split('', 6));  //[ 'm', 'y', 't', 'e', 's', 't' ]
  console.log('myteststring'.split(',', 6)); //[ 'myteststring' ]


  console.group("------ str.localeCompare(compareString[, locales[, options]])")
  console.log('Österreich' > 'Zealand'); // true
  console.log('Österreich'.localeCompare('Zealand')); // -1 (false) 
  console.log('ř > r - ', 'ř'.localeCompare('r', 'en', { sensitivity: 'base' })); //0
  console.log('ř > r - ', 'ř'.localeCompare('r', 'cs', { sensitivity: 'base' })); //1
  console.log('ä > z - ', 'ä'.localeCompare('z', 'de')); // отрицательное значение: в немецком буква ä идёт рядом с буквой a
  console.log('ä > z - ', 'ä'.localeCompare('z', 'sv')); // положительное значение: в шведском буква ä следует после буквы z
  // В немецком буква a является базовой для буквы ä
  console.log('ä > a - ', 'ä'.localeCompare('a', 'de', { sensitivity: 'base' })); // 0
  // В шведском буквы ä и a являются двумя разными базовыми буквами
  console.log('ä > a - ', 'ä'.localeCompare('a', 'sv', { sensitivity: 'base' })); // положительное значение
  console.groupEnd();

  let strCodes = '';
  for (let i = 65; i <= 220; i++) {
    strCodes += String.fromCodePoint(i);  // символ из кода
  }
  console.log(strCodes);
  console.log('…'.codePointAt(0).toString(16)); // \x2026 (8230)
  console.log('S\u0307\u0323'); // Ṩ
  console.log('S\u0307\u0323'.length); //3
  console.log("S\u0307\u0323".normalize().length); //1
  console.log("S\u0307\u0323".normalize() == "S\u0323\u0307".normalize())//true

  console.log('⋨ [0] - ', '⋨'.charCodeAt(0).toString(16)); // d835, между 0xd800 и 0xdbff // ! ???
  console.log('⋨ [1] - ', '⋨'.charCodeAt(1).toString(16)); // dcb3, между 0xdc00 и 0xdfff // ! ???

  function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str; // '…' один символ
  }
  console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 30));

  console.groupEnd();
  //---- подстрока
  console.group("********** подстрока");
  const str1 = '012345678901234567890abc';
  console.log(str1.substr(1, 3));    //123
  console.log(str1.substring(1, 3)); //12
  console.log(str1.slice(1, 3));     //12
  console.log(str1.slice(-3, -1));   //ab
  console.groupEnd();
  // ! ************ Вывод Юникод, hex символа 
  console.group('************ Вывод Юникод, hex символа');
  console.log("\u2764\uFE0F");
  console.log("\xAE");
  console.log('\u{1D306}'); //ECMAScript 6: Unicode code point escapes
  console.log("Ich \u2665 B\xFCcher");
  console.groupEnd();
  // ! ********** Literals ********** /
  console.group('********** Literals');
  const olives = 0b0001;
  const ham = 0b0010;
  const pineapple = 0b0100;
  const artechoke = 0b1000;

  const pizza_ham_pineapple = pineapple | ham;
  const pizza_four_seasons = olives | ham | artechoke;
  console.log(pizza_ham_pineapple); //6
  console.log(pizza_four_seasons);  //11
  console.groupEnd();
  // ! ********** Теговые шаблоны **********
  console.group('********** Теговые шаблоны');
  function template(strings, ...keys) {
    return (function (...values) {
      var dict = values[values.length - 1] || {};
      var result = [strings[0]];
      keys.forEach(function (key, i) {
        var value = Number.isInteger(key) ? values[key] : dict[key];
        result.push(value, strings[i + 1]);
      });
      return result.join('');
    });
  }

  var t1Closure = template`${0}${1}${0}!`;
  console.log(t1Closure('Y', 'A'));  // "YAY!"
  var t2Closure = template`${0} ${'foo'}!`;
  console.log(t2Closure('Hello', { foo: 'World' }));  // "Hello World!"
  function latex(str) {
    return { "cooked": str[0], "raw": str.raw[0] }
  }

  console.log(latex`Первый 
   \unicode  yes`); // { cooked: undefined, raw: "\unicode" }
  console.groupEnd();

  function tag(strings) {
    return strings.raw[0];
  }

  console.log('********** Сырая строка — ', tag`string text line 1 \\n string text line 2`);
  // выводит "string text line 1 \\n string text line 2",
  // включая 'n' и два символа '\'

}