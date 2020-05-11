'use strict'
{
  console.clear();
  const myDate = "26-02-2012".split("-");
  const newDate = myDate[1] + "/" + myDate[0] + "/" + myDate[2];
  console.log((new Date(newDate).getTime())); //will alert 1330210800000
  console.log(new Date("2012-03-08").getTime() == new Date("2012-03-08").getTime());
  const startDate = new Date();
  //Pi
  let i = 1n;
  let x = 3n * (10n ** 30n);
  let pi = x;
  while (x > 0) {
    x = x * i / ((i + 1n) * 4n);
    console.log('x = ', x);
    pi += x / (i + 2n);
    console.log('pi = ', pi);
    i += 2n;
    console.log('i = ', i);

  }
  console.log(Number(pi) / (10 ** 30));
  console.log(Math.PI);
  console.log(`Time: ${new Date() - startDate} ms`);


}