function isDivisibleBy3(maskStr) {
    var digitSum = 0,
        left = '0'.charCodeAt(),
        right = '9'.charCodeAt(),
        result = [],
        maskData = maskStr.split(''),
        hashPos = -1;

    for (var i = 0; i < maskData.length; i++) {
        if (left <= maskData[i].charCodeAt() && maskData[i].charCodeAt() <= right) {
            digitSum += maskData[i].charCodeAt() - left;
        } else {
            hashPos = i;
        }
    }
    for (var i = 0; i < 10; i++) {
        if ((digitSum + i) % 3 === 0) {
            maskData[hashPos] = String.fromCharCode(left + i);
            result.push(maskData.join(''));
        }
    }
    return result;
}

console.log(isDivisibleBy3("2#0"))
console.log(isDivisibleBy3("4#2"))