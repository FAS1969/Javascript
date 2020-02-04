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
