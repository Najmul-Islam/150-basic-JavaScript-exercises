function divideDigit(num, d) {
    if (d == 1) {
        return num;
    } else {
        while (num % d === 0) {
            num /= d;
        }
        return num;
    }
}

console.log(divideDigit(-12, 2))
console.log(divideDigit(13, 2))
console.log(divideDigit(13, 1))