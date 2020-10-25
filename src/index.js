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
    let resultString = '';
    let actualString = '';
    for (let i = 0; i < expr.length; i += 10) {
        if (expr[i] === '*') { 
            resultString += ' '; 
            continue;
        }
        actualString = '';
        for (let j = 0; j < 10; j += 2) {
            if (expr[j + i] === '0') continue;
            else if (expr[j + i] === '1' && expr[j + i + 1] === '0') actualString += '.';
            else if (expr[j + i] === '1' && expr[j + i + 1] === '1') actualString += '-';
        }
        resultString += MORSE_TABLE[actualString];
    }
    return resultString;
}

module.exports = {
    decode
}