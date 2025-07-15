// Write a JavaScript function to find the difference between two arrays.

// Sample Input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10]

// Expected Output: c = [3, 10, 100]

let arr1 = [1, 2, 3]
let arr2 = [100, 2, 1, 10]

function diffArr(arr1, arr2){
    let result = [];

    for(let i=0; i<arr1.length; i++){
        if(arr2.indexOf(arr1[i]) === -1){
            result.push(arr1[i])
        }
    }

    for(let i=0; i<arr2.length; i++){
        if(arr1.indexOf(arr2[i]) === -1){
            result.push(arr2[i])
        }
    }

    return result;
}

let result = diffArr(arr1, arr2);

for(let i=0;i<result.length; i++){
    console.log(result[i]);
}