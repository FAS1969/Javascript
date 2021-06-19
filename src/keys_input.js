import * as fs from 'fs';
import readline from 'readline';

(async function () {
  console.log('Начало программы.');
  if (process.stdout.isTTY) {

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    const it = rl[Symbol.asyncIterator]();
    const line1 = await it.next();
    console.log(line1.value);
    //process.exit(0);
    rl.close();
    /*
        for await (const line of rl) {
          console.log(line)
          if (line.length === 0) break;
        }
        */
    process.stdin.resume();
    const BUFSIZE = 1;
    var rtnval = "";
    let buf = Buffer.alloc(BUFSIZE);
    try {
      fs.readSync(process.stdin.fd, buf, 0, BUFSIZE);
    } catch (e) {
      if (e.code === 'EAGAIN') { // 'resource temporarily unavailable'
        throw 'ERROR: interactive stdin input not supported.';
      } else if (e.code === 'EOF') {
        return;
      }
      throw e; // unexpected exception
    }
    if (buf[0] === 10) {   //LF \n   return on line feed
      return;
    } else if (buf[0] !== 13) {     //CR \r   skip carriage return
      rtnval += new String(buf);
    }
    console.log(process.stdin);
    process.stdin.pause();
    /*    await (async (res) => {
        await process.stdin.on('readable', function () {
          let key = String(process.stdin.read());
        });
      })()*/
  }
  else {
    console.log("You are not using a tty device...");
  }
  console.log('Конец программы.');
})();
