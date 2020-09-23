function nearestroundNumber(num) {
    while (num % 10) {
        num++;
    }
    return num;
}

console.log(nearestroundNumber(53));
console.log(nearestroundNumber(592));