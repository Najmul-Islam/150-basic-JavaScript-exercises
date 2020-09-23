function intSum(num) {
    var sSum = 0;
    while (num > 0) {
        sSum += num;
        num = Math.floor(num / 2);
    }
    return sSum;
}

console.log(intSum(8))
console.log(intSum(9))
console.log(intSum(26))