{
  //-----------------------------
  const tstArr = [1, 2, 3, 4];
  tstArr[10] = 25;
  console.log(tstArr); //[ 1, 2, 3, 4, <6 empty items>, 25 ]
  //-------------- функции работы с массивом -----------------
  const people = [
    { name: 'test1', id: 1, email: 'test1@test.com' },
    { name: 'test2', id: 2, email: 'test2@test.com' },
    { name: 'test3', id: 3, email: 'test3@test.com' },
    { name: 'test4', id: 4, email: 'test3@test.com' }
  ];

  const person2 = people.find(person => person.id === 2);
  //console.log(person2); // { name: "test2", id: 2, email: "test2@test.com"}

  const numbers = [1, 2, 3, 4, 10];
  numbers.findIndex(x => x === 4); // returns 3
  numbers.find(x => x === 15);     // returns -1
  numbers.map(num => {
    if (typeof num === "number")
      return;
    return num * 2;
  })

  const cars = ['BMW', 'Toyota', 'Tesla', 'Audi'];
  console.log(cars.includes('Toyota'));  // true
  console.log(cars.includes('mercedes')); // false

  let newCarsArray = [...cars];
  console.log(newCarsArray);// ['BMW', 'Toyota', 'Tesla', 'Audi']

  const array1 = [1, 2, 4];
  const array2 = [3, 5];
  const array3 = [...array1, ...array2];
  console.log(array3);// [ 1, 2, 4, 3, 5 ]
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
  console.log(dogs.reduce((allTemperaments, dog) => {
    return [...allTemperaments, ...dog.temperament];
  }, []));

  console.log([1, 7, 11].map(parseInt));
  console.log([1, 7, 11].map((num) => parseInt(num)));
  [1, 7, 11].map(console.log); //parseInt() принимает только два аргумента: число и сист. исчисления
  //------------------------ многомерный массив в одномерный
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
  //---------------
  const matrix = Array.from(Array(5), () => Array(10).fill());
  const matrix1 = Array(...Array(5)).map(() => Array(...Array(10)));
  const matrix2 = new Array(5, new Array(10));
  matrix[1][1] = 44;
  matrix1[1][1] = 33;
  matrix2[1][1] = 33;
  console.log(matrix);
  console.log(matrix1);
  console.log(matrix2);
  console.log(matrix[0][7]);
  console.warn(matrix2[0][7] || 'FAS: matrix2[0][7]  не найден!');
  //-------------------------- flatMap на малых объемах быстрее reduce
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
  //------------Объединение массивов и удаление дублей
  let longest = function (s1, s2) {
    return Array.from(new Set([...s1, ...s2])).sort().join('').toString();
  };

  console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
  let arrNew = longest("xyaabbbccccdefww", "xxxxyyyyabklmopq").split('');
  arrNew.splice(1, 0, ["___"]);
  console.log(arrNew.join(''));

  console.log([0, 1, 2, 3, 4, 10].reduce((prev, curr) => prev + curr)); //array summation
  //------------------------ object in array and back
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
//************************ sort array ********************
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
 
console.log(rows.sort( ({name: first}, {name: second}) => {
    if ( first > second ) return 1;
    if ( first < second ) return -1;
    return 0;
} )); 
console.log(rows.sort( (x, y) => x.year - y.year ));
}