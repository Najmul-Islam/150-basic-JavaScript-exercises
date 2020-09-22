function sumTowInt(int1, int2) {
    var sumInt = int1 + int2;
    if (sumInt >= 50 && sumInt <= 80) {
        return 65;
    } else {
        return 80;
    }
}

console.log(sumTowInt(30, 20));
console.log(sumTowInt(90, 80));