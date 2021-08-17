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
    '**********': ' '
};
function numbersInSymbols(nums) {
    nums = nums.replace(/00/g , '')
    nums = nums.replace(/10/g , '.')
    nums = nums.replace(/11/g , '-')
    return nums
}

function decode(expr) {
    let chars =[]
    let symbols = []
    for (let i = 0; i < expr.length; i += 10) {
       chars.push(expr.slice(i, i+10))
    }
    for (let char = 0; char < chars.length; char++) {
       symbols.push(numbersInSymbols(chars[char]))
    }
    
    let result = ""
    for (let r = 0; r < symbols.length; r++) {
        result = result + MORSE_TABLE[symbols[r]]
    }
    return result
    }   
   

module.exports = {
    decode
}
