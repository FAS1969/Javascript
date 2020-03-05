{
  console.clear();
  const testStr = 'MyTestingString';
  console.log(testStr.slice(2, 8) + ' ' + testStr.substr(2, 8) + ' ' + testStr.substring(2, 8));//Testin TestingS Testin

  console.group('String');
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
  //---- подстрока
  const str1 = '012345678901234567890abc';
  console.log(str1.substr(1, 3));    //123
  console.log(str1.substring(1, 3)); //12
  console.log(str1.slice(1, 3));     //12
  console.log(str1.slice(-3, -1));   //ab
  // ! ************ Вывод Юникод, hex символа 
  console.log("\u2764\uFE0F");
  console.log("\xAE");
  console.log('\u{1D306}'); //ECMAScript 6: Unicode code point escapes
  console.log("Ich \u2665 B\xFCcher");
  // ! ********** Literals ****************/
  const olives = 0b0001;
  const ham = 0b0010;
  const pineapple = 0b0100;
  const artechoke = 0b1000;

  const pizza_ham_pineapple = pineapple | ham;
  const pizza_four_seasons = olives | ham | artechoke;
  console.log(pizza_ham_pineapple); //6
  console.log(pizza_four_seasons);  //11
  console.groupEnd();

}