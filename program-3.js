// Write a JavaScript function which taken an array as an argument and returns sorted array in ascending order.

// Sample Input: [ -3, 8, 7, 6, 5, -4, 3, 2, 1];
// Expected Output: [ -4, -3, 1, 2, 3, 5, 6, 7, 8]

let arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

const bubSort = (arr) => {
    let n = arr.length;
    for(let i=0; i< n-1; i++){
        for(let j=0; j < n-i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

let result = bubSort(arr1);

for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
}