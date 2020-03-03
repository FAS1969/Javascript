//'use strict'
{
  console.clear();
  let a = [];
  let b = () => { };
  console.log((a == a) + ' ' + (a == !a));
  console.log(!a);
  console.log(a == false);
  console.log(Boolean(a) == false);
  console.log(!b);
  console.log(b == true);
  if (a)
    console.log('yes')
  else
    console.log('no')

  let aa = -1;
  let bb = 0.25;
  console.log(aa == ~bb ^ 0);
  console.log((aa == (~bb)) ^ 0);
  console.log(4 ^ 5);

  const doNothing = (a) => { a += 5 };
  console.log(doNothing(4));

  var ff1 = "wrong";
  let s1 = function ff() { return "1st"; }
  let s2 = function ff(val) { this.ff1 = "right"; return "2nd"; }
  console.log(new s1().ff1);

}