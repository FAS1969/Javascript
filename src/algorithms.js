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

}