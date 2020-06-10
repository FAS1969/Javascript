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
    // growl() {
    //   console.log('admin growl');
    //   super.growl();
    // }
  };

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

  admin.growl();
  admin.growl = function () {
    console.log('admin growl');
    //this.super.growl();
  };
  admin.growl.bind(admin);
  admin.growl();
}