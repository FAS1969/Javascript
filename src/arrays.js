'use strict'
{
  //#region //! Шпаргалка по методам массива:
  /*
! Для добавления/удаления элементов:
  ● push (...items)  //? – добавляет элементы в конец,
  ● pop()  //? – извлекает элемент с конца,
  ● shift()  //? – извлекает элемент с начала,
  ● unshift(...items) //? – добавляет элементы в начало.
  ● splice(pos, deleteCount, ...items) //? – начиная с индекса  pos  удаляет
  ● deleteCount  //? элементов и вставляет  items .
  ● slice(start, end) //? – создаёт новый массив, копируя в него элементы с позиции
                        ? start  до  end  (не включая  end ).
  ● concat(...items) // ? – возвращает новый массив: копирует все члены текущего
                        ? массива и добавляет к нему  items . Если какой-то из  items  является массивом,
                        ? тогда берутся его элементы.
! Для поиска среди элементов:
  ● indexOf/lastIndexOf(item, pos)  – ищет  item , начиная с позиции  pos , и
возвращает его индекс или  -1 , если ничего не найдено.
  ● includes(value)  – возвращает  true , если массив имеет значение  value , в
противном случае  false .
  ● find/filter(func)  – фильтрует элементы через функцию и отдаёт первые/все
значения, которые при прохождении через неё возвращают  true .
findIndex  похож на  find , но возвращает индекс вместо значения.
Для перебора элементов:
  ● forEach(func)  – вызывает  func  для каждого элемента. Ничего не возвращает.
Для преобразования массива:
  ● map(func)  – создаёт новый массив из результатов вызова  func  для каждого
элемента.
  ● sort(func)  – сортирует массив на месте, а потом возвращает его.
  ● reverse()  – на месте меняет порядок следования элементов на противоположный
и возвращает изменённый массив.
  ● split/join  – преобразует строку в массив и обратно.
  ● reduce(func, initial)  – вычисляет одно значение из всего массива, вызывая
func  для каждого элемента и передавая промежуточный результат между
вызовами.
! Дополнительно:
  ● Array.isArray(arr)  проверяет, является ли  arr  массивом.
Обратите внимание, что методы  sort ,  reverse  и  splice  изменяют исходный массив.

  */
  //#endregion
  //-----------------------------
  //#region //!-------------- функции работы с массивом -----------------
  let fruits = [];

  console.group("********* стэк");
  // TODO Методы  push/pop  выполняются быстро, а методы  shift/unshift  – медленно.
  fruits = ["Яблоко", "Апельсин", "Груша"];
  console.log(fruits.pop()); // удаляем "Груша" и выводим его 
  console.log(fruits.push('Лимон'));
  console.log(fruits); // 'Яблоко', 'Апельсин', 'Лимон'

  console.log(fruits.shift()); // удаляем "Яблоко" и выводим его 
  console.log(fruits.unshift('Киви'));
  console.log(fruits); // 'Киви', 'Апельсин', 'Лимон' 
  console.groupEnd();
  console.group("********* Создает и заполняет массив (инициализирует) - ");
  console.log('1 - ', Array(100).join().split('').map(() => 0)[22]);
  console.log('2 - ', Array(100).join('0').split('')[22]);
  console.log('3 - ', Array(100).fill(0)[22]);
  console.log(Array.apply(null, { length: 100 }).map(() => -1)[11]);
  var bestArr = Array(1000);
  for (var i = 0; i < bestArr.length; bestArr[i++] = 77);
  console.log(bestArr[77]);
  //---------------
  const matrix = Array.from(Array(5), () => Array(10).fill(0));
  const matrix1 = Array(...Array(5)).map(() => Array(...Array(10)));
  const matrix2 = new Array(5, new Array(10));
  const matrix3 = Array(...Array(5)).map(() => '');
  matrix[1][1] = 44;
  matrix1[1][1] = 33;
  matrix2[1][1] = 33;
  console.log('matrix - ', matrix);
  console.log('matrix1 - ', matrix1);
  console.log('matrix2 - ', matrix2);
  console.log('matrix3 - ', matrix3);
  console.log(matrix[0][7]);
  console.warn(matrix2[0][7] || 'FAS: matrix2[0][7]  не найден!');

  console.groupEnd();

  console.log('--------------------');
  const tstArr = [1, 2, 3, 4, false, ''];
  tstArr[10] = 25;
  console.log(tstArr[8]); //undefined
  console.log(tstArr); // [ 1, 2, 3, 4, false, '', <4 empty items>, 25 ]
  console.log(tstArr.length); // 11
  console.log('Фильтр только true values', tstArr.filter(Boolean));
  const people = [
    { name: 'test1', id: 1, email: 'test1@test.com' },
    { name: 'test2', id: 2, email: 'test2@test.com' },
    { name: 'test3', id: 3, email: 'test3@test.com' },
    { name: 'test4', id: 4, email: 'test3@test.com' }
  ];

  const person2 = people.find(person => person.id === 2);
  console.log('Метод find - ', person2); // { name: "test2", id: 2, email: "test2@test.com"}

  const numbers = [1, 2, 3, 4, 10];
  numbers.findIndex(x => x === 4); // returns 3
  console.log(numbers.find(x => x === 10));     // returns -1
  console.log('********* map - ', numbers.map(num => {
    return num * 2;
  }))

  const cars = ['BMW', 'Toyota', 'Tesla', 'Audi', 'Renault', 'Skoda'];
  console.log(cars.includes('Toyota'));  // true
  console.log(cars.includes('mercedes')); // false

  let newCarsArray = [...cars];
  console.log(newCarsArray);// ['BMW', 'Toyota', 'Tesla', 'Audi']

  const array1 = [1, 2, 4];
  const array2 = [3, 5];
  const array3 = [...array1, ...array2];
  console.log(array3);// [ 1, 2, 4, 3, 5 ]
  console.log('********* slice - ', cars.slice(2, 4)); //со 2-го по 4-й не включая

  for (const iterator of array2) {
    console.log(iterator);
  }

  //----------------------------------------------------------
  const dogs = [
    {
      id: 'dog-1',
      name: 'Poodle',
      temperament: [
        'Intelligent',
        'Active',
        'Alert',
        'Faithful',
        'Trainable',
        'Instinctual',
      ],
    },
    {
      id: 'dog-2',
      name: 'Bernese Mountain Dog',
      temperament: ['Affectionate', 'Intelligent', 'Loyal', 'Faithful'],
    },
    {
      id: 'dog-3',
      name: 'Labrador Retriever',
      temperament: [
        'Intelligent',
        'Even Tempered',
        'Kind',
        'Agile',
        'Outgoing',
        'Trusting',
        'Gentle',
      ],
    },
  ];
  console.log(dogs.find(dog => dog.name === 'Bernese Mountain Dog'));
  console.log(dogs.some(dog => dog.temperament.includes('Aggressive')));
  console.log(dogs.some(dog => dog.temperament.includes('Trusting')));
  console.log(dogs.every(dog => dog.temperament.includes('Trusting')));
  console.log(dogs.every(dog => dog.temperament.includes('Intelligent')));
  console.log(dogs.map(dog => dog.name));
  console.log(dogs.filter(dog => dog.temperament.includes('Faithful')));
  console.log('dogs.reduce - ', dogs.reduce((allTemperaments, dog) => {
    return [...allTemperaments, ...dog.temperament];
  }, []));

  console.log([1, 7, 11].map(parseInt));
  console.log([1, 7, 11].map((num) => parseInt(num)));
  [1, 7, 11].map(console.log); //parseInt() принимает только два аргумента: число и сист. исчисления
  //#endregion

  //#region //!------------------------ многомерный массив в одномерный
  console.group("********** многомерный массив в одномерный")
  let courses = [
    {
      subject: "math",
      numberOfStudents: 3,
      waitlistStudents: 2,
      students: ['Janet', 'Martha', 'Bob', ['Phil', 'Candace']]
    },
    {
      subject: "english",
      numberOfStudents: 2,
      students: ['Wilson', 'Taylor']
    },
    {
      subject: "history",
      numberOfStudents: 4,
      students: ['Edith', 'Jacob', 'Peter', 'Betty']
    }
  ];
  let courseStudents = courses.map(course => course.students);
  console.log(courseStudents);
  let flattenOneLevel = courseStudents.flat(Infinity); //flat()==flat(1) 
  console.log(flattenOneLevel);
  console.groupEnd();
  //#endregion

  //#region // !-------------------------- flatMap на малых объемах быстрее reduce
  console.group("*********** flatMap на малых объемах быстрее reduce");
  const arr = Array(100).fill(0).map((v, i) => i);
  //console.log(arr);
  console.time('reduce');
  const arr1 = arr.reduce((result, current) => (result.push(current * current), result), []);
  console.timeEnd('reduce');
  //console.log(arr1);

  console.time('flatMap');
  const arr2 = arr.flatMap(current => [current * current]);
  console.timeEnd('flatMap');
  //console.log(arr2);

  console.time('map');
  const arr3 = arr.map(current => current * current);
  console.timeEnd('map');
  //console.log(arr3);
  console.groupEnd();
  //#endregion

  //#region // !------------Объединение массивов и удаление дублей
  console.group("************* Объединение массивов и удаление дублей");
  console.log('Простейшее удаление дублей - ', [...new Set([1, 2, 3, 3])]);
  let longest = function (s1, s2) {
    return Array.from(new Set([...s1, ...s2])).sort().join('').toString();
  };

  console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
  let arrNew = longest("xyaabbbccccdefww", "xxxxyyyyabklmopq").split('');
  arrNew.splice(1, 0, ["___"]);
  console.log(arrNew.join(''));

  console.log('Reduce - ', [0, 1, 2, 3, 4, 10].reduce((prev, curr, index, array) => prev + curr)); //array summation
  console.groupEnd();
  //#endregion

  // !------------------------ реализация array map
  function map(arr, mapCallback) {
    // проверяем переданные параметры
    if (!Array.isArray(arr) || !arr.length || typeof mapCallback !== 'function') {
      return []
    } else {
      let result = []
      // мы создаем массив с результатами при каждом вызове функции
      // поскольку мы не хотим менять оригинальный массив
      for (let i = 0, len = arr.length; i < len; i++) {
        result.push(mapCallback(arr[i], i, arr))
        // помещаем результаты mapCallback в result
      }
      return result
    }
  }
  console.log('********* реализация array map - ', map([true, 2, '4', 7, '3'], (e) => +e));
  // !------------------------ реализация array filter
  function filter(arr, filterCallback) {
    // проверяем передаваемые параметры
    if (!Array.isArray(arr) || !arr.length || typeof filterCallback !== 'function') {
      return []
    } else {
      let result = []
      // ...
      for (let i = 0, len = arr.length; i < len; i++) {
        // определяем соответствие возвращаемого результата заданному условию
        if (filterCallback(arr[i], i, arr)) {
          // помещаем значение, прошедшее фильтр, в result
          result.push(arr[i])
        }
      }
      return result
    }
  }
  console.log('********* реализация array filter - ', filter([true, 2, '4', 7, '3', 33], (e) => typeof e === 'number'));
  // !------------------------ реализация array reduce
  function reduce(arr, reduceCallback, initialValue) {
    // ..
    if (!Array.isArray(arr) || !arr.length || typeof reduceCallback !== 'function') {
      console.log('=========');
      return []
    } else {
      // если в функцию не было передано значения initialValue, то
      let hasInitialValue = initialValue !== undefined
      let value = hasInitialValue ? initialValue : arr[0]
      // мы будем использовать первый элемент initialValue
      // затем мы перебираем массив, начиная с 1, если в функцию не передавалось значения initialValue, либо с 0, если значение было передано
      for (let i = hasInitialValue ? 0 : 1, len = arr.length; i < len; i++) {
        // затем на каждой итерации мы присваиваем результат вызова reduceCallback переменной
        value = reduceCallback(value, arr[i], i, arr)
      }
      return value
    }
  }
  let sum = 0;
  console.log('********* реализация array reduce - ', reduce([1, 2, 4, 7, 3], (sum, e) => sum + e, 0));
  // !------------------------ object in array and back
  console.group("********* object in array and back");
  let students = {
    amelia: 20,
    beatrice: 22,
    cece: 20,
    deirdre: 19,
    eloise: 21
  };
  console.log(students);
  // преобразуем объект в массив для того чтобы воспользоваться методом .filter()
  let overTwentyOne = Object.entries(students).filter(([name, age]) => {
    return age >= 21;
  });
  console.log(overTwentyOne);
  // преобразуем многомерный массив обратно в объект
  const drinkingAgeStudents = Object.fromEntries(overTwentyOne);
  console.log(drinkingAgeStudents);
  console.groupEnd();
  // ! ************************ sort array ********************
  console.group("********* sort array");
  const rows = [
    {
      name: 'Larry',
      website: 'google.com',
      topic: '42',
      year: 1998
    },
    {
      name: 'Zsolt',
      website: 'devcareermastery.com',
      topic: 'IT Career',
      year: 2016
    },
    {
      name: 'Zsolt',
      website: 'zsoltnagy.eu',
      topic: 'JavaScript',
      year: 2015
    }
  ];

  console.log(rows.sort(({ name: first }, { name: second }) => {
    if (first > second) return 1;
    if (first < second) return -1;
    return 0;
  }));
  console.log(rows.sort((x, y) => x.year - y.year));
  console.groupEnd();
  const arrNum = [4, 6, 19, 34, 32];
  console.log(arrNum.sort()); //[ 19, 32, 34, 4, 6 ] // ! сортирует как строки
  //--------------

}
