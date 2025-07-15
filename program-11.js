// Write a JavaScript program to compute the union of two arrays.

// Sample input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10];
// Expected Output: c = [1, 2, 3, 10, 100]


arr1 = [1, 2, 3];
arr2 = [100, 2, 1, 10];

function union(arr1 , arr2){
    let result = [];
    for(let i=0; i<arr1.length; i++){
        if(result.indexOf(arr1[i]) !== -1){
            continue;
        }
        result.push(arr1[i]);
    }

    for(let i=0; i<arr2.length; i++){
        if(result.indexOf(arr2[i]) !== -1){
            continue;
        }
        result.push(arr2[i]);
    }

    return result;
}

let result = union(arr1, arr2);

for(let i=0;i<result.length; i++){
    console.log(result[i]);
}