function testDigit(x, y, n) {
    if (n < 40 || n > 10000) {
        return false;
    } else {
        if (n >= x && n <= y) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(testDigit(40, 4000, 45));
console.log(testDigit(80, 320, 79));
console.log(testDigit(89, 4000, 30));