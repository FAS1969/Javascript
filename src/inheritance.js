'use strict'
{
  let user = {
    name: "John",
    surname: "Smith",
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    },
    get fullName() {
      return `${this.name} ${this.surname}`;
    },
    walk() {
      if (!this.isSleeping) {
        console.log(`I walk`);
      }
    },
    sleep() {
      this.isSleeping = true;
    },
    growl() {
      console.log('user growl');
    }
  };

  let admin = {
    __proto__: user,
    isAdmin: true,
    growl() {
      console.log('admin growl');
      super.growl();
    }
  };
  let superAdmin = {
    __proto__: admin,
  }
  admin.growl();
  console.log('************************');
  superAdmin.growl = function () {
    console.log('superAdmin growl');
    admin.growl.call(this);
  };
  superAdmin.growl();
  console.log('************************');
  console.log(admin.fullName); // John Smith (*)

  // срабатывает сеттер!
  admin.fullName = "Alice Cooper"; // (**)

  console.log(user.name);
  console.log(admin.name);
  admin.sleep();

  console.log(admin.isSleeping); // true
  console.log(user.isSleeping); // undefined (нет такого свойства в прототипе)
  for (let prop in admin) {
    let isOwn = admin.hasOwnProperty(prop);

    if (isOwn) {
      console.log(`Our: ${prop}`);
    } else {
      console.log(`Inherited: ${prop}`);
    }
  }
  let clone = Object.create(Object.getPrototypeOf(admin), Object.getOwnPropertyDescriptors(admin));
  console.dir(clone);
  console.log(clone.fullName);
  //! ******** Организация наследования, которая называется «функциональным паттерном наследования»
  //базовый класс
  function Machine(power) {
    //протект свойства (лишь договоренность)
    this._power = power;
    this._enabled = false;
    //приватное свойство
    var self = this;

    this.enable = function () {
      self._enabled = true;
    };

    this.disable = function () {
      self._enabled = false;
    };
  }
  //класс наследник
  function Fridge(power) {
    // унаследовать
    Machine.apply(this, arguments);

    var food = []; // приватное свойство food

    this.addFood = function () {
      if (!this._enabled) {
        throw new Error("Холодильник выключен");
      }
      if (food.length + arguments.length >= this._power / 100) {
        throw new Error("Нельзя добавить, не хватает мощности");
      }
      for (var i = 0; i < arguments.length; i++) {
        food.push(arguments[i]); // добавить всё из arguments
      }
    };

    this.getFood = function () {
      // копируем еду в новый массив, чтобы манипуляции с ним не меняли food
      return food.slice();
    };
    this.filterFood = function (filter) {
      return food.filter(filter);
    };

    this.removeFood = function (item) {
      var idx = food.indexOf(item);
      if (idx != -1) food.splice(idx, 1);
    };

    var parentDisable = this.disable;
    this.disable = function () {
      if (food.length) {
        throw new Error("Нельзя выключить: внутри еда");
      }
      parentDisable();
    };
  }

  var fridge = new Fridge(500);
  fridge.enable();
  fridge.addFood("котлета");
  fridge.addFood("сок", "варенье");

  var fridgeFood = fridge.getFood();
  console.log(fridgeFood); // котлета, сок, варенье

  // добавление элементов не влияет на еду в холодильнике
  fridgeFood.push("вилка", "ложка");
  //fridge.disable(); // ошибка, в холодильнике есть еда

  console.log(fridge.getFood()); // внутри по-прежнему: котлета, сок, варенье

}
