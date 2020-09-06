'use strict'
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
  const startDate = new Date();
  let i = 1n;
  let x = 3n * (10n ** 120n);
  let pi = x;
  while (x > 0) {
    x = x * i / ((i + 1n) * 4n);
    pi += x / (i + 2n);
    i += 2n;
  }
  console.log(Number(pi / (10n ** 20n)));
  //31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679n
  console.log(Math.PI);
  console.log(`Time: ${new Date() - startDate} ms`);

  // ! **********************************************************
  // ! ******************** Простые числа
  console.group("************* Простые числа")
  function isPrime(n) {
    if (n % 2n == 0) return n == 2n;
    let d = 3n;
    while (d * d <= n && n % d != 0n)
      d += 2n
    return d * d > n
  }
  console.log(isPrime(27644437n)); //true 18014398241046527n

  //*----------------------------
  function isPrimeReg(n) { // ! долгий алгоритм
    return !('1'.repeat(n).match(/^1?$|^(11+?)\1+$/));
  }
  console.log(isPrimeReg(3571));

  //? Разложение числа на простые множители называется факторизацией.
  function factorize(n) {
    let dividers = [];
    let divisor = 2;
    while (divisor ** 2 <= n) {
      if (n % divisor == 0) {
        n = Math.trunc(n / divisor);
        dividers.push(divisor);
      }
      else divisor += 1;
    }
    if (n != 1)
      dividers.push(n);
    return dividers
  }
  console.log('70 = ', factorize(70)); // [ 2, 5, 7 ]
  console.log('120 = ', factorize(120)); // [ 2, 2, 2, 3, 5 ]

  console.groupEnd();
  // ! **********************************************************
  // ! ********************  Обход дерева и суммирование без рекурсии
  // ! ********************  ОЧЕРЕДЬ
  function getSum(obj) {
    var arr = [obj],
      sum = 0,
      current;

    while (arr.length > 0) {
      current = arr.shift();
      sum += current.valueNode;

      if (current.next != null) {
        for (var i = 0; i < current.next.length; i++) {
          arr.push(current.next[i]);
        }
      }
    }

    return sum;
  }
  var tree = {
    valueNode: 3,
    next: [{
      valueNode: 1,
      next: null
    },
    {
      valueNode: 3,
      next: null
    },
    {
      valueNode: 2,
      next: null
    },
    {
      valueNode: 2,
      next: [
        {
          valueNode: 1,
          next: null
        },
        {
          valueNode: 5,
          next: null
        }
      ]
    }]
  };
  console.log('************* Сумма всех valueNode - ', getSum(tree));

  // ! **********************************************************
  // ! ********************  Наибольший общий делител
  // ! ********************  алгоритм Евклида => НОД(a, b) = НОД(a - b, b)
  function gcd(a, b) {
    while (b != 0 && a != 0) {
      if (a > b)
        a = a % b;
      else
        b = b % a;
    }
    return Math.max(a, b);
  }
  console.log('************* НОД(72, 80) = ', gcd(72, 80));
  // ! **********************************************************
  // ! ******************** Тасование Фишера — Йетса (метода Дуршенфельда)
  console.group("************** Тасование Фишера — Йетса");
  let arrShuffle = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
      // поменять элементы местами
      // мы используем для этого синтаксис "деструктурирующее присваивание"
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  console.log(shuffle(arrShuffle));
  // ! подсчёт вероятности для всех возможных вариантов
  let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
  };
  for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
  }
  // показать количество всех возможных вариантов
  for (let key in count) {
    console.log(`${key}: ${count[key]}`);
  }
  console.groupEnd();
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
      let sum = String(num).split('').reduce((a, b) => Number(a) + Number(b));

      sums[sum] ? sums[sum].push(num) : sums[sum] = [num];
    });

    let result = Object.values(sums)
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
  //! ******************* Получаем массив чисел и находим минимальное неотрицательное число,
  //! ******************* которого нет в этом массиве.  *********************
  console.group("***********находим минимальное неотрицательное число");
  function nextId(ids) {
    /*
    const used = new Set(ids);
    for (let i = 0; i <= ids.length; i++) {
      if (!used.has(i)) return i;
    }
    */
    /*    let x = 0;
        while (ids.includes(x)) x++;
        return x;
     */   // @ мое решение
    if (!ids.length) return 0;
    ids = [...new Set(ids.filter(a => a > -1).sort((a, b) => a - b))];
    let minVal = -1;
    for (let i = 0; i < ids.length; i++) {
      minVal++;
      if (minVal < ids[i]) return minVal;
    }
    return ids[ids.length - 1] + 1;

  }
  //
  let nextId1 = (ids) => ids.sort((a, b) => a - b).reduce((a, b) => a + (a === b), 0)
  console.log(nextId([0, 2, 1, 3, 5]));
  console.log(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  console.log(nextId1([0, 1, 1, 2, 3, 5, -2, 7]));
  console.log(nextId([]));
  console.log(nextId([-1, 3, 0, 1]));
  console.groupEnd();
  //! ******************* Какое самое маленькое число делится нацело на все числа от 1 до 20  *********************
  console.group("***********находим Наименьшее кратное для 1-20");
  console.time('time')
  let start = 2520; // 2520 - самое маленькое число, которое делится без остатка на все числа от 1 до 10.
  let isFound = false;
  while (!isFound) {
    start++;
    isFound = true;
    for (let i = 2; i <= 20; i++) {
      if (start % i != 0) {
        isFound = false;
        break;
      }
    }
  }
  console.timeLog('time', 'Число - ' + start);
  console.groupEnd();
}
