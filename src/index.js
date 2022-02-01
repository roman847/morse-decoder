const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const resultArr = expr.match(/.{1,10}/g).reduce((acc, item) => {
      if (item === "**********") {
        acc.push(' ');
      }
      else if (item.startsWith(0)) {
        acc.push(decoderBinaryToMorse(Number(item)));
  
      }
      else {
        acc.push(decoderBinaryToMorse(item));
      }
      return acc;
  
    }, []);
  
    return resultArr.reduce((acc, item) => {
      if (item === ' ') {
        acc += " "
      }
      else {
        for (let key in MORSE_TABLE) {
          key === item ? acc += MORSE_TABLE[key] : acc;
        }
      }
  
      return acc;
    }, '')
  }
  
  function decoderBinaryToMorse(element) {
    let word = [];
    while (element >= 10) {
      element % 10 === 0 ? word.push(".") : word.push("-");
      element = Math.trunc(element / 100);
    }
    return word.reverse().join('');
  }
  

module.exports = {
    decode
}