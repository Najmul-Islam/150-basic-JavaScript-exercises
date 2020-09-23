function dotProduct(vector1, vector2) {
    var result = 0;
    for (var i = 0; i < 3; i++) {
        result += vector1[i] * vector2[i];
    }
    return result;
}

console.log(dotProduct([1, 2, 3], [1, 2, 3]))
console.log(dotProduct([2, 4, 6], [2, 4, 6]))
console.log(dotProduct([1, 1, 1], [0, 1, -1]))