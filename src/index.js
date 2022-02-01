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
    const resArr = expr.match(/.{1,10}/g).reduce((acc, el) => {
      if (el === "**********") {
        acc.push(' ');
      }
      else if (el.startsWith(0)) {
        acc.push(decoderBinaryToMorse(Number(el)));
  
      }
      else {
        acc.push(decoderBinaryToMorse(el));
      }
      return acc;
  
    }, []);
  
    return resArr.reduce((acc, el) => {
      if (el === ' ') {
        acc += " "
      }
      else {
        for (let key in MORSE_TABLE) {
            if(key === el) {
                acc += MORSE_TABLE[key]
            }
         
        }
      }
  
      return acc;
    }, '')
  }
  
  function decoderBinaryToMorse(el) {
    let word = [];
    while (el >= 10) {
      el % 10 === 0 ? word.push(".") : word.push("-");
      el = Math.trunc(el / 100);
    }
    return word.reverse().join('');
  }
  

module.exports = {
    decode
}