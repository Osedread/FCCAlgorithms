// ROMAN NUMERAL CONVERTER
// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.
// jshint esversion: 6
//
function convertToRoman(num) {
    
    let romanArr = [];

    let ref = [
        ['MM', 2000],
        ['M', 1000],
        ['CM', 900], // before M
        ['D', 500],
        ['CD', 400], // before D
        ['C', 100],
        ['XC', 90], // before C
        ['L', 50],
        ['XL', 40], // before L
        ['X', 10],
        ['IX', 9], // before X
        ['V', 5],
        ['IV', 4], // before V
        ['I', 1]
    ]; 
    
    for (let i=0; i < ref.length; i++) {
        let romanRow = ref[i];
        let romanVal = romanRow[1]; // 100;
        let romanLetter = romanRow[0]; // C;
        if (num >= romanVal) {
            num -= romanVal;
            romanArr.push(romanLetter);
            i=0;
        }
    }

    let result = romanArr.join("");
    console.log(result);
    return result;
}

convertToRoman(2014); // "MMXIV"
convertToRoman(3999); // "MMMCMXCIX"
