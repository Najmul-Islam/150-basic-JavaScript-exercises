function testString(inputStr) {
    var isLowerCase = function (symbol) {
        if ('a' <= symbol && symbol <= 'z') {
            return true;
        }
        return false;
    }

    var isUpperCase = function (symbol) {
        if ('A' <= symbol && symbol <= 'Z') {
            return true;
        }
        return false;
    }

    var isFirstCharLower = isLowerCase(inputStr[0]),
        isFirstCharUpper = isUpperCase(inputStr[0]);

    if (!(isFirstCharLower || isFirstCharUpper)) {
        return false;
    }

    for (var i = 1; i < inputStr.length; i++) {
        if (i % 2) {
            if (isLowerCase(inputStr[i]) === isFirstCharLower || isUpperCase(inputStr[i]) === isFirstCharUpper) {
                return false;
            }
        } else {
            if (isLowerCase(inputStr[i]) !== isFirstCharLower || isUpperCase(inputStr[i]) !== isFirstCharUpper) {
                return false;
            }
        }
    }
    return true;
}

console.log(testString('xYr'));
console.log(testString('XXyx'));  