function newString(str) {
    if (str.length >= 3) {
        resultStr = str.substring(str.length - 3);
        return resultStr + resultStr + resultStr + resultStr;
    } else {
        return false;
    }
}

console.log(newString("Python 3.0"));
console.log(newString("JS"));
console.log(newString("JavaScript"));