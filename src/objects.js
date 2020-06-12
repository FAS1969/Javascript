'use strict'
{
  /** 
   * ! ключевое свойство, без него delete будет выдавать ошибку
   * ? configurable: true  
    'use strict'
    const obj = {}  
    Object.defineProperty(obj, 'best_site', { value: 'proghub', configurable: true });
    console.log(obj.best_site);
    delete obj.best_site;
    console.log(obj.best_site);
  */
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
      console.log("Hello");
    },
    [Symbol("id")]: 123, // ignored
    //Computed property names
    ["someString" + 10]: 'Computed property names',
  };
  // ! *********** У объекта нет никаких свойств до тех пор, пока вы их в явном виде не добавите к нему
  // !  dict.__proto__ === "undefined"
  let dict = Object.create(null);
  console.log(Object.getPrototypeOf(dict));
  let dict1 = {};
  console.log(Object.getPrototypeOf(dict1));
  console.group("*********************** for on object");
  for (var i in source) {
    console.log('key - ', i); // all keys
    console.log('value - ', source[i]); // all values
  }
  console.groupEnd();
  console.group("*********************** манипуляции с объектом");
  console.log('JSON.parse стандарт -', JSON.stringify(source));
  let destObj = JSON.parse(JSON.stringify(source, ["a", "b"])); // вложенный объект не копируется
  console.log('JSON.parse с параметрами - ', destObj);
  console.log('JSON.parse с функцией - ', JSON.stringify(source, (key, value) => key === 'courses' ? 'массив' : value));
  console.log('JSON.parse с форматированием - ', JSON.stringify(source, null, 2));
  // копирование объекта
  const original = { a: 1 };
  const copyObject = Object.assign({}, original);
  console.log('Копирование объекта - ', copyObject); // { a: 1};
  let clone = Object.create(Object.getPrototypeOf(source), Object.getOwnPropertyDescriptors(source));
  console.log('Универсальное клонирование объекта - ', clone);
  console.groupEnd();
  //слияние объектов
  console.group("************ слияние объектов");
  const obj1 = {
    a: 'a from obj1',
    b: 'b from obj1',
    c: ['c from obj1', 'c from obj1', 'c from obj1'],
    d: {
      e: 'e from obj1',
      f: 'f from obj1',
    },
    w: ['1 from obj1', '2 from obj1', '3 from obj1'],
  };

  const obj2 = {
    b: 'b from obj2',
    c: 'c from obj2',
    d: {
      g: 'g from obj2',
      h: { h1: 'h1 from obj2', h2: 'h2 from obj2' },
    },
    z: 'z from obj2',
  };

  let comObj = {};
  Object.assign(comObj, obj1, obj2);
  console.log('Слияние через assign - ', comObj);

  const summary = { ...obj1, ...obj2 };
  console.log('Слияние через ... - ', summary);
  console.groupEnd();
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
  //objGet.foo = 2; //! ошибка TypeError: Cannot set property foo of #<Object> which has only a getter
  console.log(objGet.foo);

  let fixedObj = {};
  Object.preventExtensions(fixedObj);
  //fixedObj.bar = 1; // ! TypeError: Cannot add property bar, object is not extensible
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
  console.groupEnd();
  // ! будет одно поле - все к строковым ключам
  let obj_1 = {
    "0": 1,
    0: 2,
    false: 3,
    null: 4,
    'null': 5
  }
  console.log(obj_1["0"] + obj_1[0] + obj_1['null']);
  console.log(obj_1);
  //---------------
  class Something { }
  const someObj = new Something();
  console.log(typeof someObj == typeof Something); //false
  console.log(typeof someObj); //object
  console.log(typeof Something); //function
  console.log(typeof obj_1);
  //--------------------
  let objTest = {
    name: "Джон",
    hi() { console.log(this); }
  }

  // разделим получение метода объекта и его вызов в разных строках
  let hi = objTest.hi;
  objTest.hi();
  hi(); //this = undefine
  hi.bind(objTest)(); //нормально

  // ! объект к примитиву 
  console.group("************* объект к примитиву")
  let user11 = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
      console.log(`hint: ${hint}`);
      return hint == "string" ? `{name: "${this.name}"}` : this.money;
    },
    // ! если не определена Symbol.toPrimitive будут работать нижние
    // для хинта равного "string" 
    toString() {
      return `{name(toString): "${this.name}"}`;
    },
    // для хинта равного "number" или "default" 
    valueOf() {
      return this.money;
    }

  };

  // демонстрация результатов преобразований:
  console.log(user11); // hint не вызывается
  console.log(String(user11)); // hint: string -> {name: "John"}
  console.log(+user11); // hint: number -> 1000
  console.log(user11 + 500); // hint: default -> 1500
  console.groupEnd();

  // ! Флаги и дескрипторы свойств
  console.group("************* Флаги и дескрипторы свойств")
  let guest = {
    name: "John",
    surname: "Smith",
  };
  let descriptor = Object.getOwnPropertyDescriptor(guest, 'name');
  console.log(JSON.stringify(descriptor, null, 2));
  Object.defineProperty(guest, "admin", {
    value: false
  });
  console.log(JSON.stringify(Object.getOwnPropertyDescriptor(guest, 'admin'), null, 2));
  Object.defineProperty(guest, 'fullName', {
    get() {
      return `${this.name} ${this.surname}`;
    },
    set(value) {
      [this.name, this.surname] = value.split(" ");
    }
  });

  {//!дополнительные функции
    //Object.defineProperties(obj, descriptors)
    //console.log(Object.getOwnPropertyDescriptors(guest));
    /**
      * !Object.preventExtensions(obj) 
      * Запрещает добавлять новые свойства в объект.
      *!Object.seal(obj) 
      *Запрещает добавлять/удалять свойства. Устанавливает  configurable: false  для
      *всех существующих свойств.
      *!Object.freeze(obj) 
      *Запрещает добавлять/удалять/изменять свойства. Устанавливает  configurable:
      *false, writable: false  для всех существующих свойств. А также есть методы для их
      *проверки:
      *!Object.isExtensible(obj) 
      *Возвращает  false , если добавление свойств запрещено, иначе  true .
      *!Object.isSealed(obj) 
      *Возвращает  true , если добавление/удаление свойств запрещено и для всех
      *существующих свойств установлено  configurable: false .
      *!Object.getOwnPropertyDescriptors
      *let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
      *for (let key in user) {
      *  clone[key] = user[key]
      *}
      *Глобальное запечатывание объекта
      *!Object.isFrozen(obj) 
      *Возвращает  true , если добавление/удаление/изменение свойств запрещено, и для всех
      *текущих свойств установлено  configurable: false, writable: false .
    */
  }
  let person = {
    name: "Leonardo",
    age: 30,
    profession: {
      name: "developer"
    }
  };
  let person1 = {
    city: "Donetsk",
    coordinates: {
      x: 300, y: 125
    }
  };
  let person2 = Object.create(Object.getPrototypeOf(person), Object.getOwnPropertyDescriptors(person));;
  Object.setPrototypeOf(person2, person1);
  Object.freeze(person);
  person.profession.name = "doctor";
  // person.name = "Lima"; // !Uncaught TypeError: Cannot assign to read only property 'name' of object
  // ! ------функция глубокой заморозки объекта “deep-freeze”
  function deepFreeze(object) {
    let propNames = Object.getOwnPropertyNames(object);
    console.log(propNames);
    for (let name of propNames) {
      let value = object[name];
      object[name] = value && typeof value === "object" ?
        deepFreeze(value) : value;
    }
    return Object.freeze(object);
  }
  console.log(person2);
  deepFreeze(person2);
  person2.coordinates.x = 75; // родительский объект тоже нужно запечатывать
  console.log(person2.coordinates.x);
  person2.profession.name = "junior"; //!ERROR
  console.groupEnd();
  //------------------------
  var Employee = {
    company: 'xyz'
  }
  var emp1 = Object.create(Employee);
  delete emp1.company //не удаляет из прототипа
  console.log(emp1.company); //xyz
}
