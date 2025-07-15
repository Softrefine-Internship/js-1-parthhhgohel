// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.

// Sample input:
// arr1 = [1, 0, 2, 3, 4];
// arr2 = [3, 5, 6, 7, 8, 13];

// Expected Output: [4, 5, 8, 10, 12, 13]

let arr1 = [1, 0, 2, 3, 4];
let arr2 = [3, 5, 6, 7, 8, 13];

function arraySum(arr1, arr2){
    let n = arr1.length;

    for(let i=0; i<n; i++){
        arr2[i] = arr1[i] + arr2[i];
    }

    return arr2;
}

let result = arraySum(arr1, arr2);
for(let i=0;i<result.length; i++){
    console.log(result[i]);
}