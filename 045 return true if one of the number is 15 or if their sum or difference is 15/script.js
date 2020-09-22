function sumDifference(x, y) {
    if (x + y == 15 || Math.abs(x - y) == 15) {
        return true;
    } else {
        return false;
    }
}

console.log(sumDifference(15, 9));
console.log(sumDifference(25, 15));
console.log(sumDifference(7, 8));
console.log(sumDifference(25, 10));
console.log(sumDifference(5, 9));
console.log(sumDifference(7, 9));
console.log(sumDifference(9, 25));