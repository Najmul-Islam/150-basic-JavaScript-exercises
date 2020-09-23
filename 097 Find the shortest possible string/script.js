function buildPalindrome(newStr) {
    var flag;
    for (var i = newStr.length; ; i++) {
        flag = true;
        for (var j = 0; j < i - j - 1; j++) {
            if (i - j - 1 < newStr.length && newStr[j] != newStr[i - j - 1]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            for (var j = newStr.length; j < i; j++) {
                newStr += newStr[i - j - 1];
            }
            return newStr;
        }
    }
}

console.log(buildPalindrome("abcddc"))
console.log(buildPalindrome("122"))

function test(str) {
    var str = str + str.split('').reverse().join('').slice(1);
    return str;
}

console.log(test("abcddc"))
console.log(test("122"))