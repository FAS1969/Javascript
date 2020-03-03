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
  const regHttp = new RegExp(/^.*?(?=[\+\^#%&$\*:<>\?/\{\|\}\[\]\\\)\(]).*$/gm);
  do {
    m = regHttp.exec(testString);
    if (m) {
      console.log(m[0]);
    }
  } while (m);
  const reg1 = new RegExp(/http(s:|:)\/\/(www.|ww2.|)([0-9a-z.A-Z-]*\.\w{2,3})/g);
  do {
    m = reg1.exec(testString);
    if (m) {
      console.log(m[0]);
    }
  } while (m);
  // console.log(reg1.exec(testString));
  const reg = /^\s*$\n/g;
  const reg2 = /([\w0-9-._]+@[\w0-9-.]+[\w0-9]{2,3})/g;
  console.log('Empty strings -', reg);
  console.log('Url(domen) -', reg1);
  console.log('Email -', reg2);
  console.log('убирает символы подряд > 2  - ', 'uuuuxxaaaaxuuu'.replace(/(\w)\1{2,}/g, '$1$1'));//uuxxaaxuu
  console.log("John Smith".replace(/(\w+) (\w+)/i, `$2, $1`));//Smith, John
  console.info("html and css".replace(/html|css/gi, str => str.toUpperCase()));
  // ! опоставление с предыдущими символами
  console.log(testString.match(/(?<=\$)\d+/)[0]); //400
  //console.log(testString.match(/qua(?=i)/)[0] ?? 'NOT FOUND!!!');  //qu
  console.log(testString.match(/(?<=abc)\d+/)[0]); //500
  const testRegExp = /[a-zA-Z]+(?=Juice)/g;
  let matches = testString.match(testRegExp);
  console.log(matches); // ["Mango", "Grape"]
  const re = new RegExp(/ullamco (\d+)\.\d*/);
  console.log(re.exec(testString)[0]);

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


}