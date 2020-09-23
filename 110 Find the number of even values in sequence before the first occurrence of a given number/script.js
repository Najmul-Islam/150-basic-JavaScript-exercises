function findNumbers(arrNum, num) {
    var result = 0;
    for (var i = 0; i < arrNum.length; i++) {
        if (arrNum[i] % 2 === 0 && arrNum[i] !== num) {
            result++;
        }
        if (arrNum[i] === num) {
            return result;
        }
    }
    return -1;
}

console.log(findNumbers([1, 2, 3, 4, 5, 6, 7, 8], 5))
console.log(findNumbers([1, 3, 5, 6, 7, 8], 6))