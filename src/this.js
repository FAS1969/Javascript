'use strict'
{
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
