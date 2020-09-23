function digitDelete(num) {
    var result = 0,
        numDigits = [];

    while (num) {
        numDigits.push(num % 10);
        num = Math.floor(num / 10);
    }

    for (var indexNum = 0; indexNum < numDigits.length; indexNum++) {
        var n = 0;
        for (var i = numDigits.length - 1; i >= 0; i--) {
            if (i !== indexNum) {
                n = n * 10 + numDigits[i];
            }
        }
        result = Math.max(n, result);
    }
    return result;
}

console.log(digitDelete(100));
console.log(digitDelete(10));
console.log(digitDelete(1245));