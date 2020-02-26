'use strict';
{
  // ! обязательные параметры функции
  console.group("************** обязательные параметры функции");

  const isRequired = () => { throw new Error(`param is required`); };

  const hello = (name = isRequired()) => { console.log(`hello ${name}`) };

  // *Эти варианты вызова функции будут работать нормально
  hello(null);
  hello('David');
  // *Тут будет выдана ошибка, функции не передан аргумент name
  //hello();
  // *Здесь тоже будет ошибка
  //hello(undefined);
  console.groupEnd();

  // ! Разбор строк запросов
  console.group("************** Разбор строк запросов");
  // Предполагается, что мы работаем с "?post=1234&action=edit"
  var urlParams = new URLSearchParams("?post=1234&action=edit");//window.location.search);

  console.log(urlParams.has('post')); // true
  console.log(urlParams.get('action')); // "edit"
  console.log(urlParams.getAll('action')); // ["edit"]
  console.log(urlParams.toString()); // "?post=1234&action=edit"
  console.log(urlParams.append('active', '1')); // "?post=1234&action=edit&active=1"
  console.groupEnd();
}