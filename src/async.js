'use strict'
{
  console.time('time');
  (async function() {
    let s = 'str - ';
    async function hello() {
      return 'World';
      //return await 'World';  //!(1)
    }
    for (let i = 0; i < 1_000_000; i++) {
      //hello().then(e => s = e);  //!(2)
      let e = await hello();
      s = e;
    }
    return s;
  })().then((s)=>{
      console.log(s);
      console.timeEnd('time');
    });
}
