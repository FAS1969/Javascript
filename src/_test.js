'use strict'
{
  console.clear();
  let user = {
    name: "Джон",
    hi() { console.log(this.name); }
  }

  // разделим получение метода объекта и его вызов в разных строках
  let hi = user.hi;
  hi();
}