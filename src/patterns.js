{
  const all = (arr, fn = Boolean) => arr.every(fn);
  const allEqual = arr => arr.every(val => val === arr[0]);
  const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;
  const arrayToCSV = (arr, delimiter = ',') =>
    arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');
  const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
  const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;
  const bifurcate = (arr, filter) =>
    arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
  const bifurcateBy = (arr, fn) =>
    arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);
  const capitalize = ([first, ...rest], isRestLower = false) =>
    first.toUpperCase() + (isRestLower ? rest.join('').toLowerCase() : rest.join(''));
  const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

  //console.log(os.type());// ! os доступно в Node.js
  //---------------------  
  console.log(capitalizeEveryWord('hello world!')); // 'Hello World!'
  console.log(capitalize('fooBar')); // 'FooBar'
  console.log(capitalize('fooBar', true)); // 'Foobar'
  console.log(bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'));
  console.log(bifurcate(['beep', 'boop', 'foo', 'bar'], [true, false, false, true]));
  console.log(average(...[1, 2, 3])); // 2
  console.log(average(1, 2, 3)); // 2
  console.log(deepFlatten([1, [2], [[3], 4], 5])); // [1,2,3,4,5]
  console.log(arrayToCSV([['a', 'b', 'c', 'd']])); // '"a","b"\n"c","d"'
  console.log(arrayToCSV([['a', 'b'], ['c', 'd']], ';')); // '"a";"b"\n"c";"d"'
  console.log(approximatelyEqual(Math.PI / 2.0, 1.5708, 0.00001)); // true
  console.log(allEqual([1, 1, 3, 4, 5, 6])); // false
  console.log(allEqual([1, 1, 1, 1])); // true
  console.log(all([4, 2, 3], x => x > 1));

  var f = ['🌑', '🌒', '🌓', '🌔', '🌝', '🌖', '🌗', '🌘'];
  //var f = ['🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛'];
  const url = location.href;
  function currentIni() {
    let i = -1;
    return () => i < f.length - 1 ? ++i : i = 0;
  };
  function loop() {
    let i = current();
    location.replace(url + '#' + f[i]);
    console.log(i, f[i]);
    setTimeout(loop, 400);
  }
  let current = currentIni();
  loop();

}