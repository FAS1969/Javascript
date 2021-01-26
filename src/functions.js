'use strict';
{
  // ! параметры по умолчанию
  const value = { num: 10 };
  const mult = (x = { ...value }) => {
    return (x.num *= 2);
  }
  console.log(mult());
  console.log(value.num);
  console.log(mult());
  console.log(mult(value));
  console.log(mult(value));
  // ! параметры всегда передаются по значению
  function changeStuff(a, b, c) {
    a = a * 10;
    b.item = "changed";
    c = { item: "changed" };
  }
  let num = 10;
  let obj1 = { item: "unchanged" };
  let obj2 = { item: "unchanged" };
  changeStuff(num, obj1, obj2);
  console.log(num);
  console.log(obj1.item);
  console.log(obj2.item);
  // ! обязательные параметры функции
  console.group("************** обязательные параметры функции");

  const isRequired = () => { throw new Error(`param is required`); };

  const hello = (name = isRequired()) => { console.log(`hello ${name}`) };

  // *Эти варианты вызова функции будут работать нормально
  hello(null);
  hello('David');
  // *Тут будет выдана ошибка, функции не передан аргумент name
  //hello();
  // *Здесь тоже будет ошибка
  //hello(undefined);
  console.groupEnd();

  // ! Разбор строк запросов
  console.group("************** Разбор строк запросов");
  // Предполагается, что мы работаем с "?post=1234&action=edit"
  var urlParams = new URLSearchParams("?post=1234&action=edit");//window.location.search);

  console.log(urlParams.has('post')); // true
  console.log(urlParams.get('action')); // "edit"
  console.log(urlParams.getAll('action')); // ["edit"]
  console.log(urlParams.toString()); // "?post=1234&action=edit"
  console.log(urlParams.append('active', '1')); // "?post=1234&action=edit&active=1"
  console.groupEnd();
  // ! Композиция
  console.group("************* Композиция");
  const compose = (...fns) => x => fns.reduceRight((acc, fn) => (console.log(fn.toString(), acc), fn(acc)), x);
  const lowerCase = str => str.toLowerCase();
  const join = separator => xs => xs.join(separator);
  const map = fn => xs => xs.map(fn);
  const split = pattern => str => str.split(pattern);

  const bookTitles = [
    "JavaScript The Good Parts",
    "You Don’t Know JS",
    "Eloquent JavaScript"
  ];

  const slugify = map(
    compose(
      join("-"),
      split(" "),
      lowerCase
    )
  );
  console.log(slugify(bookTitles)); // ["javascript-the-good-parts", "you-don’t-know-js", "eloquent-javascript"]
  console.groupEnd();

  /* //! Задержка при наступлении события
  * (обычно используется в серии однотипных событий - mousemove, dragover и т.д.)
  * Примерно посмотреть что это можно здесь - http://demo.nimius.net/debounce_throttle/
  */
  function holdBeforeFired(funcToFire, holdTime) {

    let hold = false, _this, _arguments;

    return function action() {
      if (hold) { _this = this; _arguments = arguments; return; }

      hold = true;
      funcToFire.apply(this, arguments);

      setTimeout(() => {
        hold = false;
        if (_arguments) {
          action.apply(_this, _arguments);
          _this = _arguments = null;
        }
      }, holdTime);
    }
  }
  // ! Перегрузка функций
  // ? подход под воросом!!!
  function addMethod(object, name, fn) {
    var old = object[name];
    object[name] = function () {
      if (fn.length == arguments.length)
        return fn.apply(this, arguments);
      else if (typeof old == 'function')
        return old.apply(this, arguments);
    };
  }
  // Примеры вызова перегруженной функции:
  function Users() {
    addMethod(this, "find", function () {
      console.log('Find all users...');
    });
    addMethod(this, "find", function (name) {
      console.log('Find a user by ' + name)
    });
    addMethod(this, "find", function (first, last) {
      console.log('Find a user by ' + first + ' and ' + last)
    });
  }
  // Пример вызовов
  var users = new Users();
  users.find(); // Finds all
  users.find("John"); // Finds users by name
  users.find("John", "Resig"); // Finds users by first and last name
  users.find("John", "E", "Resig"); // Does nothing
}
