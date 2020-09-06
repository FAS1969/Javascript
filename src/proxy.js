/* eslint-disable no-unused-vars */
/* eslint-disable no-irregular-whitespace */
{
  let obj = { a: 1, b: 2 }
  // Используем синтаксис Proxy в поиске администратора для объекта
  let objProxy = new Proxy(obj, {
    get: function (item, property, itemProxy) {
      console.log(`You are getting the value of '${property}' property`)
      return item[property] * 2;
    },
    set: function (item, property, value, itemProxy) {
      console.log(`You are setting '${value}' to '${property}' property`)
      item[property] = value;
    },
    /**
    * ● has(item,propKey) -  операция propKey in objProxy и возврат логического значения.
    * ● deleteProperty(item, propKey) —  операция delete proxy[propKey] и возврат логического значения.
    * ● ownKeys(item) для операцийObject.getOwnPropertyNames(proxy), Object.getOwnPropertySymbols(proxy), Object.keys(proxy), for...in, для возврата      *  массива. Метод возвращает имена всех собственных свойств целевого объекта, в то время как возвращаемый результат Object.keys() включает в себя
    *  только перечисляемые свойства целевого объекта.
    * ● getOwnPropertyDescriptor(item, propKey): перехват операции Object.getOwnPropertyDescriptor(proxy, propKey), возврат описания свойства.
    * ● defineProperty(item, propKey, propDesc)для операций Object.defineProperty(proxy, propKey, propDesc）, Object.defineProperties(proxy, propDescs), *возврат логического значения.
    * ● preventExtensions(item): перехватчик операции операции Object.preventExtensions(proxy), возврат логического значения.
    * ● getPrototypeOf(item): перехватчик операции Object.getPrototypeOf(proxy), возврат объекта.
    * ● isExtensible(item): перехватчик операции Object.isExtensible(proxy), возврат логического значения.
    * ● setPrototypeOf(item, proto): перехватчик операции Object.setPrototypeOf(proxy, proto), возврат логического значения.
    * ! Если целевой объект  —  функция, можно применять две дополнительные операции перехвата:
    * ● apply(item, object, args) — перехват вызовов функции, таких как proxy(...args), proxy.call(object, ...args), proxy.apply(...) .
    * ● construct(item, args) —  перехват операции конструирования, вызванной экземпляром Proxy, например new proxy(...args).
    */
  });
  console.log(objProxy.a);
  objProxy.b = 100;
  console.log(objProxy.b);

  //! Массив с перекрым доступом к отрищательным элементам
  // arr[-1]  —  последний элемент массива,
  // arr[-3]  —  третий элемент массива с конца.
  let arr = [1, 2, 3, 4, 5, 6];
  let arrProxy = negativeArray(arr);
  function negativeArray(array) {
    return new Proxy(array, {
      get: function (target, propKey) {
        if (!isNaN(Number(propKey)) && Number.isInteger(Number(propKey)) && Number(propKey) < 0) {
          propKey = String(target.length + Number(propKey));
        }
        return target[propKey]
      }
    })
  }
  console.log(arrProxy[-2]); // 5
}
