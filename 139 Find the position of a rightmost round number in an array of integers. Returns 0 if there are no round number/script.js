function findRightmostRoundNumber(inputArr) {
    var result = 0;
    for (var i = 0; i < inputArr.length; i++) {
        if (inputArr[i] % 10 === 0) {
            result = i;
        }
    }
    return result;
}

console.log(findRightmostRoundNumber([1, 22, 30, 54, 56]));
console.log(findRightmostRoundNumber([1, 22, 32, 54, 56]));
console.log(findRightmostRoundNumber([1, 22, 32, 54, 50]));