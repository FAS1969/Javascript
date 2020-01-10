{

  console.clear();
  let source =
  {
    a: 1,
    b: {
      c: 2,
      e: 'sdsdsds'
    },
    d: 'comment',
    courses: ['html', 'css', 'js'],
    sayHi() { // ignored
      alert("Hello");
    },
    [Symbol("id")]: 123, // ignored
  };
  console.log(JSON.stringify(source));
  let destObj = JSON.parse(JSON.stringify(source, ["a", "b"])); // вложенный объект не копируется
  console.log(destObj);
  //копирование
  const original = { a: 1 };
  const copyObject = Object.assign({}, original);
  console.log(copyObject); // { a: 1};
  //слияние объектов
  const obj1 = {
    a: 'a from obj1',
    b: 'b from obj1',
    c: ['c from obj1', 'c from obj1', 'c from obj1'],
    d: {
      e: 'e from obj1',
      f: 'f from obj1',
    },
  };

  const obj2 = {
    b: 'b from obj2',
    c: 'c from obj2',
    d: {
      g: 'g from obj2',
      h: 'g from obj2',
    },
    z: 'z from obj2',
  };

  let comObj = {};
  Object.assign(comObj, obj1, obj2);

  console.log(comObj);
  //----------------------------------------------
  let getCar = function (make, model, value) {
    return {
      // с синтаксисом короткой записи можно
      // пропускать значение свойства, если оно
      // совпадает с именем переменной, значение
      // которой мы хотим использовать
      make, // аналогично make: make
      model, // аналогично model: model
      value, // аналогично value: value

      // вычисляемые свойства теперь работают в
      // литералах объекта
      ["make" + make]: true,

      // Короткая запись метода объекта пропускает
      // ключевое слово `function` и двоеточие. Вместо
      // "depreciate: function() {}" можно написать:
      depreciate() {
        this.value -= 2500;
      }
    };
  };
  //Деструктуризация массивов и объектов
  let foo = function () {
    return [1, 2, 3];
  };
  let [a, b, c] = foo();
  console.log(a, b, c); // 1 2 3
  let car = getCar("Kia", "Sorento", 40000);
  car.depreciate();
  console.log(car);
  let bar = function () {
    return {
      x: 4,
      y: 5,
      z: 6
    };
  };
  let { x: d, y: f, z: g } = bar();
  console.log(d, f, g); // 4 5 6
  //
  var parent = {
    foo() {
      console.log("Привет от Родителя!");
    }
  };

  var child = {
    foo() {
      super.foo();
      console.log("Привет от Ребёнка!");
    }
  };

  Object.setPrototypeOf(child, parent);
  child.foo(); // Привет от Родителя!
  // Привет от Ребёнка!

  let user = "Кевин";
  console.log(`Привет, ${user}!`); // Привет, Кевин!

  let nicknames = ["di", "boo", "punkeye"];
  nicknames.size = 3;
  nicknames.arr = ["asa", "sds", "dffd"];
  for (let nickname in nicknames) {
    console.log(nickname);
  }

  class Task {
    constructor() {
      console.log("Создан экземпляр task!");
    }

    showId() {
      console.log(23);
    }

    static loadAll() {
      console.log("Загружаем все tasks...");
    }
  }

  console.log(typeof Task); // function
  let task = new Task(); // "Создан экземпляр task!"
  task.showId(); // 23
  Task.loadAll(); // "Загружаем все tasks..."
  //----------------------------
  const ladder = {
    step: 0,
    up() {
      this.step++;
      return this; // <--
    },
    down() {
      this.step--;
      return this; // <--
    },
    showStep() {
      console.log(this.step);
      return this; // <--
    }
  };
  ladder.up().up().down().up().down().showStep(); // 1 
  //-----------------------
  let obj = {};
  Object.defineProperty(obj, 'foo', { value: 1, writable: false });
  console.log(obj.foo);

  let objGet = { get foo() { return 17; } };
  objGet.foo = 2;
  console.log(objGet.foo);

  let fixedObj = {};
  Object.preventExtensions(fixedObj);
  fixedObj.bar = 1;
  console.log(fixedObj.bar);
  // ------------Объединение объектов
  const part1 = { id: 312, name: 'Пётр Иванов', arr: { key: 1, title: 'ddd', ind: [1, 2, 3] } }
  const part2 = { id: 313, password: 'Пароль!' }

  const user1 = { ...part1, ...part2 }
  part2.password = 'dsdsds'
  console.log(user1)
  // ------------Исключаем свойства объекта
  const noPassword = ({ password, ...rest }) => rest
  console.log(noPassword(user1)); //=> { id: 312, name: 'Пётр Иванов' }
  // ------------Динамическое исключение свойств
  const removeProperty = prop => ({ [prop]: _, ...rest }) => rest
  const removePassword = removeProperty('password')
  const removeId = removeProperty('id')

  console.log(removePassword(user1)) //=> { id: 312, name: 'Пётр Иванов' }
  console.log(removeId(user1)) //=> { name: 'Пётр Иванов', password: 'Пароль!' }
  // ------------Упорядочивание свойств
  const user3 = {
    password: 'Пароль!',
    name: 'Артём',
    id: 111
  }
  const organize = ({ id, password, ...object }) =>
    ({ id, ...object, password });
  console.log(organize(user3))
  // ------------Переименование  свойств
  const renamed = ({ id, ...object }) => ({ ID: id, ...object })
  console.log(renamed(user3))
  // ------------Добавление свойств с условием
  const user4 = { id: 312, name: 'Пётр Иванов' }
  const password = 'Пароль!'
  const userWithPassword = {
    ...user4,
    id: 312,
    ...(false && { password })
  }
  console.log(userWithPassword)
  // ------------- rest
  const obj11 = {
    a: 10,
    b: {
      x: 20,
      y: 30,
      z: 40
    }
  };

  const { b: { x, ...rest1 }, ...rest2 } = obj11;    // no error
  //const { ...rest, ...rest2 } = obj11; // → SyntaxError: Rest element must be last element

}