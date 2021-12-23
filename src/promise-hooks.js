import async_hooks from 'async_hooks';
import fs from 'fs';

/*
Обратите внимание на использование fs.writeSync вместо console.log,
который является асинхронной операцией и может вызвать бесконечную рекурсию
при использовании с асинхронными async hooks.
*/
//! fs.writeSync(Первый параметр:
//Дескриптор 0 - это стандартный ввод , fdиз которого процесс принимает ввод.
//Дескриптор 1 - это стандартный вывод , в fdкоторый процесс записывает свой вывод.
//Дескриптор 2 - это стандартная ошибка , в fdкоторую процесс записывает сообщения об ошибках.
let indent = 0;
const myHook = async_hooks.createHook({
  promiseResolve(asyncId) {
    const indentStr = ' '.repeat(indent);
    fs.writeSync(1, `${indentStr}promise resolved: ${asyncId}\n`);
  },
  init(asyncId, type, triggerAsyncId, resource) {
    const eid = async_hooks.executionAsyncId();
    const indentStr = ' '.repeat(indent);
    fs.writeSync(
      1,
      `${indentStr}${type}(${asyncId}), trigger: ${triggerAsyncId}, resource: ${resource.parentId}, execution: ${eid}\n`,
    );
  },
  before(asyncId) {
    const indentStr = ' '.repeat(indent);
    fs.writeSync(1, `${indentStr}before:  ${asyncId}\n`);
    indent += 2;
  },
  after(asyncId) {
    indent -= 2;
    const indentStr = ' '.repeat(indent);
    fs.writeSync(1, `${indentStr}after:   ${asyncId}\n`);
  },
  destroy(asyncId) {
    const indentStr = ' '.repeat(indent);
    fs.writeSync(1, `${indentStr}destroy: ${asyncId}\n`);
  },
});

myHook.enable();
async function hello() {
  return 'World';
  //return await 'World'; // добавляет 2 лишних промиса
}
console.log(hello());
