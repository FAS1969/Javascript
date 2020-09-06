'use strict'
{
  class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }

  function test() {
    throw new ValidationError("Упс!");
  }

  try {
    test();
  } catch (err) {
    console.log(err.message); // Упс!
    console.log(err.name); // ValidationError
    console.log(err.stack); // список вложенных вызовов с номерами строк для каждого
  }
  console.log('*************************');
  //! ****************
  function f() {
    try {
      console.log('начало');
      return "result";
    } catch (e) {
      /// ...
    } finally {
      console.log('очистка!');
    }
  }
  f();
  /* // !альтернатива для браузера
  window.onerror = function (message, url, line, col, error) {
    // ...
  };
  */
  process.on('uncaughtException', (err, origin) => {
    console.log(
      process.stderr.fd,
      `Caught exception: ${err}\n` +
      `Exception origin: ${origin}`
    );
  });

  setTimeout(() => {
    console.log('This will still run.');
  }, 500);

  // Intentionally cause an exception, but don't catch it.
  //nonexistentFunc();
  throw new Error('моя ошибка!');
  console.log('This will not run.');
}
