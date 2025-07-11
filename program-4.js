// Write a JavaScript function which takes two arrays as an argument and returns merged array in ascending order.

// Sample Input:
// arr1 = [3, 5, 1]
// arr2 = [4, 2]

// Expected output: [1, 2, 3, 4, 5]

let arrA = [3, 5, 1];
let arrB = [4, 2];

const bubSort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function mergeSorted(arr1, arr2) {
    if (arr1.length === 0) {
        let ans = arr1.sort();
        return ans;
    }
    if (arr2.length === 0) {
        let ans = arr2.sort();
        return ans;
    }

    let ans = [];
    arr1 = bubSort(arr1);
    arr2 = bubSort(arr2);
    let i = 0;
    let j = 0;
    while (i !== arr1.length && j !== arr2.length) {
        if (arr1[i] <= arr2[j]) {
            ans.push(arr1[i]);
            i++;
        }
        else {
            ans.push(arr2[j]);
            j++;
        }
    }

    while (i !== arr1.length) {
        ans.push(arr1[i]);
        i++;
    }
    while (j !== arr2.length) {
        ans.push(arr2[j]);
        j++;
    }

    return ans;
}

let result = mergeSorted(arrA, arrB);

for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
}