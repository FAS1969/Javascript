'use strict'
{
  //-------------------------------------------------
  let value = 10;
  const promise = new Promise((resolve) => {
    // resolve(value + 30); //40
    setTimeout(() => {
      resolve(value + 30); //50
    }, 1000);
    value = 20;
  })
  console.log(value); // 20
  promise.then((res) => {
    console.log(value); //20
    console.log(res); // то что resolve выдает
  });
}
