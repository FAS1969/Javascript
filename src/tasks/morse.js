//'use strict'
{
  console.clear();
  const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
  };

  function decode(expr) {

    const getSymbolMorse = (e) => {
      let Res;
      if (e.startsWith('*')) {
        return ' ';
      }
      return MORSE_TABLE[e.match(/([01]){2}/g).map(replDigit).join('')];
    }

    const replDigit = (couple) => {
      switch (couple) {
        case '00':
          return '';
          break;
        case '10':
          return '.';
          break;
        case '11':
          return '-';
          break;
      }
    }
    return expr.match(/([01*]){10}/g).map(getSymbolMorse).join('');
  }

  const expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";
  console.log(decode(expr));
}