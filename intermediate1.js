// SUM ALL NUMBERS IN A RANGE
// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
// The lowest number will not always come first.
//
// jshint esversion: 6
//
function sumAll(arr) {

    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let count = 0;


    for (let i=min; i <= max; i++) {
        count += i;
    }

    return count;
}

sumAll([1, 4]);