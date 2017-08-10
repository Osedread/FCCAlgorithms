// DIFF TWO ARRAYS
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
// jshint esversion:6
//
function diffArray(arr1, arr2) {
    // let arr1 = [1, 2, 3, 4, 5];
    // let arr2 [1, 2, 3, 5];
    let newArr = [];
    let concatArr = arr1.concat(arr2);
    // [1, 1, 2, 3, 3, 4, 5, 5]
    concatArr.filter(function(value) {
        if (arr1.indexOf(value) === -1 || arr2.indexOf(value) === -1) {
            newArr.push(value);
        }
    });
    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]); // should return ["diorite", "pink wool"]);