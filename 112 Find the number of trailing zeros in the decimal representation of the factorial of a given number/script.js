function trailingZeros(num) {
    var result = 0;
    for (var i = 5; i <= num; i += 5) {
        var numm = i;
        while (numm % 5 === 0) {
            numm /= 5;
            result++;
        }
    }
    return result;
}

console.log(trailingZeros(8))
console.log(trailingZeros(9))
console.log(trailingZeros(10))