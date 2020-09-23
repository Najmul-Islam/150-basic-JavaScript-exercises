function evenDigits(num) {
    var ctr = 0;
    while (num) {
        ctr += num % 2 === 0;
        num = Math.floor(num / 10);
    }
    return ctr;
}

console.log(evenDigits(123));
console.log(evenDigits(1020));
console.log(evenDigits(102));