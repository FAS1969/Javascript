'use strict';
{
  // ! WeakSet аналогична Set, но мы можем добавлять в WeakSet только объекты (не примитивные значения).
  // Объект присутствует в множестве только до тех пор, пока доступен где-то ещё.
  // Как и Set, она поддерживает add, has и delete, но не size, keys() и не является перебираемой.

  let messages = [
    { text: 'Hello', from: 'John' },
    { text: 'How goes?', from: 'John' },
    { text: 'See you soon', from: 'Alice' },
  ];

  let readMessages = new WeakSet();

  // Два сообщения были прочитаны
  readMessages.add(messages[0]);
  readMessages.add(messages[1]);
  // readMessages содержит 2 элемента

  // ...давайте снова прочитаем первое сообщение!
  readMessages.add(messages[0]);
  // readMessages до сих пор содержит 2 элемента

  readMap.set(messages[0], new Date(2017, 1, 1));
  // Вопрос: было ли сообщение message[0] прочитано?
  console.log('Read message 0: ' + readMessages.has(messages[0])); // true

  messages.shift();
  // теперь readMessages содержит 1 элемент (хотя технически память может быть очищена позже)
}
