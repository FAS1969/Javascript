'use strict'
/*jshint esversion: 9 */
{
  //#region Исходные данные
  const testString =
    `sed do eiusmod tempor incididunt
MangoJuice, JuiceVanillaShake, GrapeJuice, ullamco 221.58 sdfsdfsf
Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore abc500 et dolore magna
aliqua. Ut enim ad minim veniam, 700abc quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea $400 commodo consequat.
Duis aute irure dolor in $400 reprehenderit in voluptate velit
esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
occaecat cupidatat non proident, sunt in culpa qui officia
deserunt mollit anim id https://sfol.cz est laborum.

abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ
0123456789 _+-.,!@#$%^&*();\/|<>"'
12345 -98.7 3.141 .6180 9,000 +42
555.123.4567	+1-(800)-555-2468
foo@demo.net	bar.ba@test.co.uk
www.demo.com	http://foo.co.uk/
https://marketplace.visualstudio.com/items?itemName=chrmarti.regex
https://github.com/chrmarti/vscode-regex`;
  //#endregion

  console.clear();
  //[a-z]+(?:([^a-z]+)[a-z]+(?:\1)?[a-z]+)([^a-z]+)[a-z]+(?:\2)?[a-z]+
  console.group(`****************  ^.*?(?=[\+\^#%&$\*:<>\?/\{\|\}\[\]\\\)\(]).*$`);
  const regHttp = new RegExp(/^.*?(?=[\+\^#%&$\*:<>\?/\{\|\}\[\]\\\)\(]).*$/gm);
  let m;
  do {
    m = regHttp.exec(testString);
    if (m) {
      console.log(m[0], '\t\t\t\t\t\tв позиции ', regHttp.lastIndex);
    }
  } while (m);
  console.groupEnd();
  console.group(`****************  Проверка простое ли число`);
  function isPrime(n) {
    // return !(Array(n + 1).join(1).match(/^1?$|^(11+?)\1+$/));
    return !('1'.repeat(n).match(/^1?$|^(11+?)\1+$/));
  }
  console.log(isPrime(28));
  console.log(isPrime(21));
  console.log(isPrime(23));
  console.groupEnd();
  console.group(`****************  /http(s:|:)\/\/(www.|ww2.|)([0-9a-z.A-Z-]*\.\w{2,3})/g`);

  const reg1 = new RegExp(/http(s:|:)\/\/(www.|ww2.|)([0-9a-z.A-Z-]*\.\w{2,3})/g);
  do {
    m = reg1.exec(testString);
    if (m) {
      console.log(m[0]);
    }
  } while (m);
  // console.log(reg1.exec(testString));
  console.groupEnd();
  console.group("************* функции RegExp")
  const reg = /^\s*$\n/g;
  const reg2 = /([\w0-9-._]+@[\w0-9-.]+[\w0-9]{2,3})/g;
  console.log('Empty strings -', reg);
  console.log('Url(domen) -', reg1);
  console.log('Email -', reg2);
  console.log('12-34-56'.replace(/-/g, ":")); //заменяет все вхождения,  replace("-", ":") - только первое
  /*
    $$ 	вставляет "$"
    $& 	вставляет всё найденное совпадение
    $` 	вставляет часть строки до совпадения
    $' 	вставляет часть строки после совпадения
    $n 	если n это 1-2 значное число, то вставляет содержимое n-й скобки
    $<имя> 	вставляет содержимое скобки с указанным именем
  */
  console.log('убирает символы подряд > 2  - ', 'uuuuxxaaaaxuuu'.replace(/(\w)\1{2,}/g, '$1$1'));//uuxxaaxuu
  console.log("John Smith".replace(/(\w+) (\w+)/i, `$2, $1`));//Smith, John
  console.info("html and css".replace(/html|css/gi, str => str.toUpperCase()));
  let strTest = "Я люблю JavaScript";
  // эти два теста делают одно и же
  console.log(/ЛЮБЛЮ/i.test(strTest)); // true
  console.log(strTest.search(/люБлю/i) != -1);

  console.log('adda abc bcc'.match(/([abc])([de])\2\1/g));
  console.groupEnd();
  // ! опоставление с предыдущими символами
  console.log(testString.match(/(?<=\$)\d+/)[0]); //400
  //console.log(testString.match(/qua(?=i)/)[0] ?? 'NOT FOUND!!!');  //qu
  console.log(testString.match(/(?<=abc)\d+/)[0]); //500
  const testRegExp = /[a-zA-Z]+(?=Juice)/g;
  let matches = testString.match(testRegExp);
  console.log(matches); // ["Mango", "Grape"]
  const re = new RegExp(/ullamco (\d+)\.\d*/);
  console.log(re.exec(testString)[0]);
  // ! Опережающие и ретроспективные проверки — (?=) and (?<=)
  console.group(`**************** Опережающие и ретроспективные проверки`);

  const found = testString.match(/la(?!m)/g);
  console.log(found, found.length);
  console.log('search - ', testString.search(/(?<=l)la(?=m)/))
  const mAll = testString.matchAll(/la(?=m)/g);
  Array.from(mAll).map(element => console.log(element[0], element.index));
  console.groupEnd();
  //---------------
  const getNameParts = /(?<first>\w+)\s(?<last>\w+)/g;
  const subMatches = getNameParts.exec(testString);

  const { first, last } = subMatches.groups
  console.log(first);  // 'Weyland'
  console.log(last);   //'Smithers'
  // -------------------- поиск разделителей
  const findSepar = function (str) {
    let [, mod, elem] = str.match(/[a-z]+(?:([^a-z]+)[a-z]+(?:\1)?[a-z]+)([^a-z]+)[a-z]+(?:\2)?[a-z]+/);
    const substringCount = (source, substr) => (source.match(new RegExp('[a-z]' + substr + '[a-z]', 'g')) || []).length;

    if (substringCount(str, elem) === 2 && substringCount(str, mod) === 1) {
      [mod, elem] = [elem, mod];
    }
    return { mod, elem };
  }
  console.log(findSepar('block_mod_mod__elem'))
  // --------------Unicode Property Escapes
  const str = '㉛';
  const str1 = 'ض';
  console.log(/\d/u.test(str));    // → false
  console.log(/\p{Number}/u.test(str));     // → true
  console.log(/\p{Alphabetic}/u.test(str1)); // → true
  console.log(/\P{Number}/u.test(str));
  //------------------------------
  console.group("****** начинается и заканчивается отной и той же гласной *****")
  let re0 = new RegExp(/^([aeiou]{1})([a-z]+)(\1)$/)
  console.log('aewxyzae', re0.test('aewxyzae'));
  console.log('awxyz', re0.test('awxyz'));
  console.log('aewxyza', re0.test('aewxyza'));
  console.log(re0.test(''));
  console.groupEnd();
  console.group("****** начинается и заканчивается fas *****")
  let re1 = new RegExp(/(fas{1})([a-z]+)\1/)
  console.log(re1.test('aewfasxyzfasae'));
  let fas = re1.exec('aewfasxyzfasae');
  fas.forEach(e => console.log(e));
  console.groupEnd();

}
