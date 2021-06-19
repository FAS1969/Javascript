'use strict'
{
  class MyClass {
    #privVar = 'приватное поле';
    prop = 125; // свойство
    constructor(value) { // конструктор
      this.name = value;
    }
    static ping() { return 'ping'; } //статический метод
    method(arg) { console.log(this.#privVar) } // метод
    get something() { } // геттер
    set something(value) { } // сеттер
    get name() { return "My name" }
    set name(value) { }
    getName() { return this.name }

    // итератор - метод с вычисляемым именем (здесь - символом)
    [Symbol.iterator]() {
      let i = 0;
      return {
        next: () => {
          return {
            value: i++,
            done: i > 5
          }
        }
      };
    }
    // генератор два вида объявления
    g1 = function* () {
      let index = 0
      while (true) {
        yield index++
      }
    }
    //   * g() {
    // let index = 0
    // while (true) {
    //   yield index++
    // }
    // }
    qux() { return 1; }
  }
  class MyChildClass extends MyClass {
    #privVar = 555;
    static pingpong() {
      return super.ping() + ' pong';
    }
    method(arg) { console.log(this.#privVar) } // метод
    qux() { console.log('super.qux() - ', super.qux()); }
  }
  console.log(MyChildClass.pingpong()); //вызов статического метода класса
  const myChildClass = new MyChildClass()
  myChildClass.qux();
  //myChildClass.#privVar = 222; //!ERROR SyntaxError: Private field '#privVar' must be declared in an enclosing class
  myChildClass.method(null);
  Object.defineProperty(myChildClass, 'dynamicProperty', {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'мое динамическое свойство'
  });
  console.log(myChildClass.dynamicProperty);
  Object.defineProperty(myChildClass, 'dynamicFunc', {
    get: function () { this.qux(); },
  });
  console.log(myChildClass.dynamicFunc);
  //! *******************
  const myClass = new MyClass('Petr'); // создание объекта
  console.log(myClass.getName());
  console.log(myClass);
  console.log(MyClass);
  console.log(MyClass.prototype.constructor === MyClass);
  let gen = myClass.g1();
  console.log(gen.next());
  console.log(gen.next());
  //! ****************************
  //! ES5 Function Constructor
  function Person(name) {
    this.name = name;
  }
  function Student(name, studentId) {
    // Call constructor of superclass to initialize superclass-derived members.
    Person.call(this, name);
    // Initialize subclass's own members.
    this.studentId = studentId;
  }
  Student.prototype = Object.create(Person.prototype);
  Student.prototype.constructor = Student;
  //! ES6 Class
  class PersonC {
    constructor(name) {
      this.name = name;
    }
  }
  class StudentC extends PersonC {
    constructor(name, studentId) {
      super(name);
      this.studentId = studentId;
    }
  }
}
