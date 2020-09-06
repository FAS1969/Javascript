'use strict'
{
  //-------------------------------------------------
  //************** */
  //-------------------------------------------------
  function chopCarrots() {
    let k = 0;
    for (let i = 0; i < 10000; i++) {
      for (let j = 0; j < 10000; j++) {
        k = Math.pow(k, i * j) / k
      }
    }
    console.log("Done chopping carrots!");
  }

  function chopOnions() {
    let k = 0;
    for (let i = 0; i < 10000; i++) {
      for (let j = 0; j < 10000; j++) {
        k = Math.pow(k, i * j) / k
      }
    }
    console.log("Done chopping onions!");
  }

  function addOnions() {
    console.log('Add Onions to pot!');
  }

  function addCarrots() {
    console.log('Add Carrots to pot!');
  }

  async function letPotKeepBoiling(time) {
    return new Promise((resolve) => setTimeout(() => {
      console.log("Pot has boiled for ", time, " minutes");
      resolve();
    }, time * 100));
  }

  async function boilPot() {
    return new Promise((resolve) => setTimeout(() => {
      console.log("Done boiling pot!");
      resolve();
    }, 5000));
  }

  async function makeSoup() {
    console.group("Варим суп")
    const pot = boilPot();
    chopCarrots();
    chopOnions();
    await pot;
    addCarrots();
    await letPotKeepBoiling(5);
    addOnions();
    await letPotKeepBoiling(10);
    console.log("Your vegetable soup is ready!");
    console.groupEnd();
  }
  //*** явные промисы
  function makeSoup1() {
    console.group("Варим другой суп");
    return Promise.all([
      new Promise((reject, resolve) => {
        chopCarrots();
        chopOnions();
        resolve();
      }),
      boilPot()
    ])
      .then(() => {
        addCarrots();
        return letPotKeepBoiling(5);
      })
      .then(() => {
        addOnions();
        return letPotKeepBoiling(10);
      })
      .then(() => {
        console.log("Ваш овощной суп готов!");
        console.groupEnd();
      });
  }
  //makeSoup();
  //makeSoup1();
  async function makeSoup3() {
    console.group("Варим суп")
    await letPotKeepBoiling(10);
    console.log("Your vegetable soup is ready!");
  }
  makeSoup3().then(console.log('then makeSoup3'));
  //------------------------------------------
  const generateTypeableChars = async function* (chars) {
    for (let i = 0; i < chars.length; i++) {
      yield await new Promise(resolve =>
        setTimeout(() => resolve(chars[i]), 350));
    }
  }
  async function typeChars(chars) {
    for await (let char of generateTypeableChars(chars)) {
      console.log(char);
    }
  }
  typeChars(['c', 'h', 'a', 'r', 's']).then(console.log('then typeChars'));
  //------------------------------------------

  console.log('end of main flow');
}
