function lowerTriangular(userMatrix) {
    for (var i = 0; i < userMatrix.length; i++) {
        for (var j = 0; j < userMatrix[0].length; j++) {
            if (j > i && userMatrix[i][j] !== 0) {
                return false;
            }
        }
    }
    return true;
}

console.log(lowerTriangular([[1, 0, 0], [2, 0, 0], [0, 3, 3]]));
console.log(lowerTriangular([[1, 0, 1], [2, 0, 0], [0, 3, 3]]));