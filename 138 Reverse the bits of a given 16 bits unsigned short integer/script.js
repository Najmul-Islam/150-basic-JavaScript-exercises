function sixteenBitsReverse(num) {
    var result = 0;
    for (var i = 0; i < 16; i++) {
        result = result * 2 + (num % 2);
        num = Math.floor(num / 2);
    }
    return result;
}

console.log(sixteenBitsReverse(12345));
console.log(sixteenBitsReverse(10));
console.log(sixteenBitsReverse(5));