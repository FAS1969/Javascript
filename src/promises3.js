//! Откомментаривать по одной
/****************start, 1, end************
console.log('start')

const promise1 = new Promise((resolve, reject) => {
  console.log(1)
})

console.log('end');
/***************start , 1 , end и 2 **************
console.log('start');

const promise2 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
});

promise2.then((res) => {
  console.log(res);
});

console.log('end');
/*****************start , 1 , 3 , end и 2****************
console.log('start');

const promise3 = new Promise((resolve, reject) => {
	console.log(1);
  resolve(2);
  console.log(3);
});

promise3.then((res) => {
	console.log(res);
});

console.log('end');*/
/*****************start , middle, 1 , end и success.****************
console.log('start');

const fn = () =>
new Promise((resolve, reject) => {
	console.log(1);
	resolve('success');
});

console.log('middle');

fn().then((res) => {
	console.log(res);
});

console.log('end');
/*****************start , end , resolve и setTimeout****************
console.log('start');

setTimeout(() => {
	console.log('setTimeout');
});

Promise.resolve().then(() => {
	console.log('resolve');
});

console.log('end');
/*****************1, 2, 4, timerStart, timerEnd, success****************
const promise = new Promise((resolve, reject) => {
	console.log(1);
  setTimeout(() => {
		console.log('timerStart');
    resolve('success');
    console.log('timerEnd');
  }, 0);
  console.log(2);
});

promise.then((res) => {
	console.log(res);
});

console.log(4);
/*****************1, 2, 4, timerStart, timerEnd, success**************** */
