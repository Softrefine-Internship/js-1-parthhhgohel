// Merge two arrays and remove duplicate items from the merged array in JavaScript.

// Sample input:
// arr1 = [1, 2, 3, 4, 5, 6];
// arr2 = [3, 4, 5, 7];

// Expected output: [1, 2, 3, 4, 5, 6, 7]

let arrA = [1, 2, 3, 4, 5, 6];
let arrB = [3, 4, 5, 7];

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
    arr1.sort();
    arr2.sort();
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

    let result = [];
    for (let i = 0; i < ans.length - 1; i++) {
        if (ans[i + 1] !== ans[i]) {
            result.push(ans[i]);
        }
    }
    if (ans[ans.length - 2] !== ans[ans.length - 1]) {
        result.push(ans[ans.length - 1]);
    }

    return result;
}

let mergedArr = mergeSorted(arrA, arrB);

for (let i = 0; i < mergedArr.length; i++) {
    console.log(mergedArr[i]);
}