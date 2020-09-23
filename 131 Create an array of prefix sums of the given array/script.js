function prefixSums(arra) {
    var newArr = [];
    for (var i = 0; i < arra.length; i++) {
        newArr[i] = 0;
        for (var j = 0; j < i + 1; j++) {
            newArr[i] += arra[j];
        }
    }
    return newArr;
}

console.log(prefixSums([1, 2, 3, 4, 5]));

console.log(prefixSums([1, 2, -3, 4, 5]));