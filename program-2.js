// Write javascript function which takes nested array as an argument and returns flatten array as output.

// Sample Input: [1, 2, [3, 4], [5, [6, 7]]];
// Expected Output: [1, 2, 3, 4, 5, 6, 7];


const arr1 = [1, 2, [3, 4], [5, [6, 7]]];
const result = [];

function func(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            // console.log(arr[i]);
            result.push(arr[i]);
        } else {
            const temp = arr[i];
            func(temp);
        }
    }
}
func(arr1);

for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
}