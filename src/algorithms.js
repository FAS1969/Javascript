{
  /**
   * Вам предлагается создать функцию, которая принимает два параметра. Первый параметр, nums, представляет собой массив чисел. 
   * Второй параметр, total – это одно число. Выходные данные функции должны быть двухэлементным массивом, который представляет 
   * собой пару чисел в nums, которые при суммирование равны total.
   */
  const len = 100_000;
  const bigArr = new Array(len).fill(1);
  bigArr[len - 2] = 9;
  bigArr[len - 1] = 10;
  const total = 19;
  //перебор сложность O(n2)
  /*
  const twoSum = (nums, total) => {
    let iterations = 0;
    const startTime = new Date();
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        iterations++;
        if (nums[i] + nums[j] === total) {
          console.log(
            `Iterations: ${iterations}`,
            `Time: ${new Date() - startTime}ms`
          );
          return [nums[i], nums[j]];
        }
      }
    }
  };
  */
  //хэш-таблица сложность O(n)
  const twoSum = (nums, total) => {
    let iterations = 0;
    const startTime = new Date();
    const previousValues = {};
    for (let i = 0; i < nums.length; i++) {
      iterations++;
      const complement = total - nums[i];
      if (previousValues[complement]) {
        console.log(
          `Iterations: ${iterations}`,
          `Time: ${new Date() - startTime}ms`
        );
        return [complement, nums[i]];
      }
      previousValues[nums[i]] = true;
    }
  };

  console.log(twoSum(bigArr, total));
  // Iterations: 4999950000 Time: 20032ms
  const bar = () => console.log('bar');
  const baz = () => console.log('baz');
  const foo = () => {
    console.log("foo");
    setTimeout(bar, 0);
    new Promise((resolve, reject) => resolve('should be right after baz, before bar')).then(console.log);
    baz();
  }
  foo();

  //************** Число Пи
  let i = 1n;
  let x = 3n * (10n ** 120n);
  let pi = x;
  while (x > 0) {
    x = x * i / ((i + 1n) * 4n);
    pi += x / (i + 2n);
    i += 2n;
  }
  console.log(pi / (10n ** 20n));
  //31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679n

  // ! **********************************************************
  // ! ******************** поменять местами значение переменных
  let a = 1;
  let b = 2;

  [a, b] = [b, a];

  console.log(a); // => 2
  console.log(b); // => 1
  /* 
  1. a = a ^ b
  2. b = a ^ b, На основании 1 aзаменяется на a ^ b. 
  Таким образом b = (a ^ b) ^ b = a ^ (b ^ b) = a ^ 0 = a. 
  Помни чем b сейчас a.
  3. a = a ^ b, На основании 1 aзамещен a ^ bи на основе 2 bзамещен a. Таким образом a = (a ^ b) ^ a = b ^ (a ^ a) = b ^ 0 = b. Переменная aстановится b.
  */
  a = a ^ b; //XOR  
  b = a ^ b;
  a = a ^ b;

  console.log(a); // => 1
  console.log(b); // => 2
  // ! **********************************************************
  // ! *********************   Алгоритм:
  /*
  - создаем переменную result, значением которой являются первые две буквы строки
  - начинаем итерацию с третьей буквы:
      - если текущая буква отличается хотя бы от одной из двух предыдущих, добавляем ее в result
      - иначе если текущая буква такая же, как две предыдущие, ничего не делаем
  - возвращаем result
  */
  function solution(input) {
    let result = input.slice(0, 2);
    for (let i = 2; i < input.length; i++) {
      if (input[i] !== input[i - 1] || input[i] !== input[i - 2]) {
        result += input[i];
      }
    }
    console.log(result);
    return result;
  }
  solution('eedaaad'); // eedaad
  solution('xxxtxxx'); // xxtxx
  solution('uuuuxxaaaaxuuu'); // uuxxaaxuu
  console.log('uuuuxxaaaaxuuu'.replace(/(\w)\1{2,}/g, '$1$1'));

  // ! **********************************************************
  // ! *********************   Алгоритм:
  /*
  - создаем пустой объект
  - перебираем числа в массиве
      - находим сумму цифр каждого числа
      - если суммы цифр не существует как свойства объекта:
          - создаем свойство и присваиваем ему в качестве значения массив, переданный функции
      - иначе если сумма цифр существует как свойство объекта:
          - добавляем число из массива, переданного функции, в массив, на который ссылается свойство
  - получаем массив из значений объекта (которые представляют собой "подмассивы", содержащие числа с одинаковыми суммами цифр)
  - отфильтровываем подмассивы, содержащие меньше двух чисел
  - для любого подмассива, содержащего больше двух чисел, находим два наибольших, остальные отбрасываем
  - заменяем каждый подмассив суммой двух его чисел
  - находим наибольшее число в массиве и возвращаем его или возвращаем -1, если в массиве нет чисел
  */
  function solution1(arr) {
    let sums = {};

    arr.forEach(num => {
      sum = String(num).split('').reduce((a, b) => Number(a) + Number(b));

      sums[sum] ? sums[sum].push(num) : sums[sum] = [num];
    });

    result = Object.values(sums)
      .filter(nums => nums.length >= 2)
      .map(nums => nums.sort((a, b) => b - a).slice(0, 2))
      .map(nums => nums.reduce((a, b) => a + b))
    [0]

    console.log(result || -1);
    return result || -1;
  }
  solution1([51, 71, 17, 42]); // 93
  solution1([42, 33, 60]); // 102
  solution1([51, 32, 43]); // -1
  // ! **********************************************************
  // ! *********************   Алгоритм:
  /*
  Для строки, состоящей из трех и более букв:
  если строка содержит 3-5 одинаковых букв подряд, необходимо совершить 1 действие
  если 6-8 таких букв - 2 действия
  если 9-11 букв - 3 действия
  Алгоритм:
  - перебираем буквы в поисках подстроки, состоящей из 3 и более одинаковых букв подряд
  - добавляем подстроки, состоящие из 3 и более одинаковых букв подряд, в массив
    - "мапируем" массив с подстроками:
        - определяем количество букв
        - извлекаем 2
        - округляем до ближайшего целого числа, кратного 3
        - делим на 3 и возвращаем частное
    - возвращаем сумму частных
  */
  function numberOfMovesForStreak(streak) {
    let length = streak.length - 2;

    while (length % 3 !== 0) {
      length++;
    }

    return length / 3;
  }

  function solution2(input) {
    const streaks = [];
    let temp = '';

    for (let i = 0; i < input.length; i++) {
      if (input[i] === input[i - 1]) {
        temp += input[i];
      } else {
        if (temp.length > 2 && temp.length !== 0) {
          streaks.push(temp);
        }
        temp = input[i];
      }
    }
    if (temp.length > 2) {
      streaks.push(temp);
    }

    console.log(streaks.map(numberOfMovesForStreak).reduce(((a, b) => a + b), 0));
    return streaks.map(numberOfMovesForStreak).reduce(((a, b) => a + b), 0);
  }
  solution2('baaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'); // 1
  solution2('baaabbaabbba'); // 2
  solution2('baabab'); // 0
}