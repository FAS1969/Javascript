'use strict'
{
  console.log(Array(3).fill('*'.repeat(50)).join('\n'));
  console.log('hello')
  let array = [1, 2, 13, 44, 5, 6];
  console.log(array.sort((a, b) => a - b).join(''));

  console.log(NaN != 5 * 'js')
}
