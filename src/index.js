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
    let sortedMorseTable = {};
    const sorted = Object.keys(MORSE_TABLE).sort((a, b) => {
        return a.length - b.length;
    })
    for (let key of sorted) {
        let d = key.split('').map( e=> {
            if (e=== '.') {
                return '10'
            } else {
                return '11'
            }
        }).join('')
        sortedMorseTable[d] = MORSE_TABLE[key];
    }
    sortedMorseTable['**********'] = ' ';
    let c = [];
    for(let i = 0;i < expr.length;i+=10) {
        c.push(expr.slice(i,i+10))
    }
     return c.map(e => {
        for (let i of Object.keys(sortedMorseTable).reverse()) {
            if (e.includes(i)) {
                return sortedMorseTable[i];
            }
        }
    }).join('')

    }


module.exports = {
    decode
}
