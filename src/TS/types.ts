enum Enum {
  A = 1, B, C = 2
}
console.log('Enum', Enum);
enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
}
console.log('StatusCodes', StatusCodes);

function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Ожидал строку или число, а получил '${padding}'.`);
}

console.log(padLeft("Hello world", 5));
console.log(padLeft("Hello world", 'FAS, '));
// console.log(padLeft("Hello world", true));
//------------------------------------------------
// ! Что такое Type Assertions в TypeScript?
/*
Type assertion представляет модель преобразования значения переменной к определенному типу.
Обычно в некоторых ситуациях одна переменная может представлять какой-то широкий тип, например,
any, который по факту допускает значения различных типов. Однако при этом нам надо
использовать переменную как значение строго определенного типа. И в этом случае мы можем привести
к этому типу.Есть две формы приведения.
*/
// Первая форма заключается в использовании угловых скобок:
let someAnyValue: any = "hello world!";
let strLength: number = (<string>someAnyValue).length;
console.log(strLength); // 12

let someUnionValue: string | number = "hello work";
strLength = (<string>someUnionValue).length;
console.log(strLength); // 10

// Вторая форма заключается в применении оператора as:
let someAnyValue1: any = "hello world!";
let strLength1: number = (someAnyValue1 as string).length;
console.log(strLength1); // 12

let someUnionValue1: string | number = "hello work";
strLength1 = (someUnionValue1 as string).length;
console.log(strLength1); // 10
