function checkEight(x, y) {
    var difference = Math.abs(x - y);
    if (difference == 8 || x == 8 || y == 8 || x + y == 8) {
        return true
    } else {
        return false;
    }
}

console.log(checkEight(7, 8));
console.log(checkEight(16, 8));
console.log(checkEight(24, 32));
console.log(checkEight(17, 18));