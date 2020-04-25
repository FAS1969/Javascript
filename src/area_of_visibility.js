//'use strict'
{
  var var1 = 12;
  (function SelfExecutedTestFun() {
    console.log("value of var1 is:" + var1);
    var var2 = 500;
    var4 = 600;
    console.log(bar); // выведет undefined
    var bar = 111;
    console.log(bar); // выведет 111
  })();
  while (true) {
    var var3 = 700;
    break;
  }
  console.log("value of var1 from out side is:" + var1);
  console.log("value of var3 from out side is:" + var3);
  console.log("value of var4 from out side is:" + var4);
  //console.log("value of var2 from out side is:" + var2); // ошибка
  //----------
  let a = 5;
  if (a) {
    let a = 2;
    a *= a;
    console.log(a);
  }
  console.log(a);
}