'use strict'
{
  const sayMixin = {
    say(phrase) {
      console.log(phrase);
    },
  };

  const sayHiMixin = {
    __proto__: sayMixin, // (или мы можем использовать Object.create для задания прототипа)

    sayHi() {
      // вызываем метод родителя

      super.say(`Привет, ${this.name}`); // (*)
    },
    sayBye() {
      super.say(`Пока, ${this.name} ${this.id}`); // (*)
    },
  };
  class Person {
    id = 'asdas6726886ddd778'
  }

  class User extends Person {
    constructor(name) {
      super();
      this.name = name;
    }
  }

  // копируем методы
  Object.assign(User.prototype, sayHiMixin);

  // теперь User может сказать Привет
  new User('Вася').sayHi(); // Привет, Вася!
  new User('Вася').sayBye(); // Привет, Вася!

}
