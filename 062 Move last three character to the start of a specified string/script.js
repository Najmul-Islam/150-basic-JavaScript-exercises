// function moveChar(str) {
//     var str1 = str.substring(str.length - 3, str.length);
//     var str2 = str.substring(0, str.length - 3);

//     return str1 + str2;
// }

// console.log(moveChar("Python"));

function moveChar(str) {
    if (str.length > 1) {
        console.log(str.slice(-3));
        return str.slice(-3) + str.slice(0, -3);
    }
    return str;
}

console.log(moveChar("Python"));
// console.log(moveChar("JavaScript"));
// console.log(moveChar("Hi"));