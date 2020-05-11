'use strict'
{
  let recipeMap = new Map([
    ["огурец", 500],
    ["помидор", 350],
    ["лук", 50]
  ]);

  // перебор по ключам (овощи)
  for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // огурец, помидор, лук
  }

  // перебор по значениям (числа)
  for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
  }

  // перебор по элементам в формате [ключ, значение]
  for (let entry of recipeMap) { // то же самое, что и recipeMap.entries() 
    console.log(entry); // огурец,500 (и так далее)
  }

  let map = new Map([
    ['1', 'str1'],
    [1, 'num1'],
    [true, 'bool1'],
    ['true', 'str2'],
  ]);
  console.log(Object.fromEntries(map));

  // ! **************************************************
  /**  
  * ? new Set(iterable)  – создаёт  Set , и если в качестве аргумента был предоставлен
  *  итерируемый объект(обычно это массив), то копирует его значения в новый  Set.
  * ? set.add(value) – добавляет значение(если оно уже есть, то ничего не делает),
  *  возвращает тот же объект  set.
  * ? set.delete(value) – удаляет значение, возвращает  true  если  value  было в
  *  множестве на момент вызова, иначе  false.
  * ? set.has(value) – возвращает  true, если значение присутствует в множестве, иначе  false.
  * ? set.clear() – удаляет все имеющиеся значения.
  * ? set.size  – возвращает количество элементов в множестве.
  */
  let set = new Set(["апельсин", "яблоко", "банан"]);

  for (let value of set) console.log(value);
  // то же самое с forEach:
  set.forEach((value, valueAgain, set) => console.log(value));

  let keys = Array.from(set.keys());

  keys.push("вишня");

  console.log(keys);

}