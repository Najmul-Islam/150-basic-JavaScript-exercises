function checkingNumbers(x, y, divisor) {
    if (x % divisor === 0 && y % divisor === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(checkingNumbers(10, 25, 5))
console.log(checkingNumbers(10, 20, 5))
console.log(checkingNumbers(10, 20, 4))