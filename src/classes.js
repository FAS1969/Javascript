'use strict'
{
  class MyClass {
    prop = 125; // свойство 
    constructor(value) { // конструктор 
      this.name = value;
    }
    method(arg) { } // метод 
    get something() { } // геттер 
    set something(value) { } // сеттер 
    [Symbol.iterator]() { } // метод с вычисляемым именем (здесь - символом) 
    // ...
  }
  const myClass = new MyClass('Petr');
  console.log(myClass);
  console.log(MyClass);
  console.log(MyClass.prototype.constructor === MyClass);
  //! **************************** 
  // ES5 Function Constructor
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
  // ES6 Class
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