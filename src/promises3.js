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
/*****************timer1, promise1, timer2****************
const timer1 = setTimeout(() => {
	console.log('timer1');

  const promise1 = Promise.resolve().then(() => {
		console.log('promise1');
  });
}, 0);

const timer2 = setTimeout(() => {
	console.log('timer2');
}, 0);
/*****************start, end, promise1, timer1, promise2, timer2**************** */
console.log('start');

const promise1 = Promise.resolve().then(() => {
  console.log('promise1');
  const timer2 = setTimeout(() => {
    console.log('timer2');
  }, 0);
});

const timer1 = setTimeout(() => {
  console.log('timer1');
  const promise2 = Promise.resolve().then(() => {
    console.log('promise2');
  });
}, 0);

console.log('end');
