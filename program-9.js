// Write a JavaScript program to find the most frequent item in an array.

// Sample input : [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Expected Output : console.log(a, "5 times")

let arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];


function mostFreq(arr){
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        if (result[arr[i]] === undefined) {
            result[arr[i]] = 1;
        } else {
            result[arr[i]] += 1;
        }
    }
    
    let max = 0;
    let ele = 0;
    
    for (let key in result) {
        if (result[key] > max) {

            max = result[key];
            ele = key;
        }
    }
    console.log(ele, max);
}

mostFreq(arr);
