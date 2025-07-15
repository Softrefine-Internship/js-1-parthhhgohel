// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.

// Expected output: 0-254-6-8.
// Sample input: 025468


let str = "025468";

let ans = "";

function dashedStr(str){
    ans += str[0];
    for(let i=1; i<str.length; i++){
        if(str[i-1]%2 === 0 && str[i]%2 === 0){
            ans += "-";
        }
        ans += str[i];
    }

    return ans;
}

console.log(dashedStr(str));