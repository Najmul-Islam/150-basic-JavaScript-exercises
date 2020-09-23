function compareArr(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let result = true;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            result = false;
        }
    }
    return result;
}

console.log(compareArr([10, 30, 50], [10, 30, 50]))
console.log(compareArr([10, 20, 30], [10, 20, 30]))
console.log(compareArr([10, 20, 30], [30, 10, 20]))
console.log(compareArr([10, 20, 30, 40], [10, 30, 20, 40]))