function isDiagonalMatrix(userMatrix) {
    for (var i = 0; i < userMatrix.length; i++) {
        for (var j = 0; j < userMatrix.length; j++) {
            if (i !== j && userMatrix[i][j] !== 0) {
                return false;
            }
        }
    }
    return true;
}

console.log(isDiagonalMatrix([[1, 0, 0], [0, 2, 0], [0, 0, 3]]));
console.log(isDiagonalMatrix([[1, 0, 0], [0, 2, 3], [0, 0, 3]]));