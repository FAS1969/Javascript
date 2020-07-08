'use strict'
{
  console.clear();
  const o = {};

  console.log("prop" in o === o.hasOwnProperty("prop")); //true
  console.log("toString" in o === o.hasOwnProperty("toString")); //false

  var obj = { a: 2 };
  function f(aobj) {
    aobj.a = 5;
    console.log(aobj);
    aobj = { a: 3 };
    console.log(aobj);
  }
  f(obj);
  console.log(obj);

  console.log(1 / 0); //Infinity
  console.log(parseInt(1 / 0, 19)); // 18==i

  let newList = [1, 2, 3].push(4);
  console.log(newList);
  let x = 5

  x = ++x, x = addFive(x), x *= 2, x -= 5

  function addFive(num) {
    return num + 5
  }
  console.log(x)
  console.log('******** 1 ***************************');
  (function () {
    console.log(this)
  })() // window

  function iHateThis() {
    console.log(this)
  }
  iHateThis() // window

  const myFavouriteObj = {
    guessThis() {
      function getName() {
        console.log(this.name)
      }
      getName.bind(this)();
    },
    name: 'Marko Polo',
    thisIsAnnoying(callback) {
      callback()
    }
  }

  myFavouriteObj.guessThis() // window
  myFavouriteObj.thisIsAnnoying(function () {
    console.log(this) // window
  })

}
