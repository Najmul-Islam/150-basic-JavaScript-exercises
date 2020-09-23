function removeDuplicateChars(str) {
    var arrChar = str.split("");
    var resultArr = [];

    for (var i = 0; i < arrChar.length; i++) {
        if (str.indexOf(arrChar[i]) === str.lastIndexOf(arrChar[i])) {
            resultArr.push(arrChar[i]);
        }
    }

    return resultArr.join("");
}

console.log(removeDuplicateChars("abcdabc"));
console.log(removeDuplicateChars("python"));
console.log(removeDuplicateChars("abcabc"));
console.log(removeDuplicateChars("1365451"));