function isPermutation(inputArr, n) {
    for (var i = 0; i < n; i++) {
        if (inputArr.indexOf(i + 1) < 0) {
            return false;
        }
    }
    return true;
}

console.log(isPermutation([1, 2, 3, 4, 5], 5));
console.log(isPermutation([1, 2, 3, 5], 5));