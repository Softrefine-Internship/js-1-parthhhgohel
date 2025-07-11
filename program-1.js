// Write a JavaScript program to clone an array.

const arr1 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Way 1
const arr2 = arr1;
console.log(arr2);

// Way 2 - Using FOR Loop
const arr3 = [];

for(let i=0; i<arr1.length; i++){
    arr3.unshift(arr1[i]);
}
console.log(arr3);