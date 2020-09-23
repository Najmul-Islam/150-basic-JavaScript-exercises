function isIdentityMatrix(matrixData) {
    for (var i = 0; i < matrixData.length; i++) {
        for (var j = 0; j < matrixData.length; j++) {
            if (matrixData[i][j] !== 1 && i === j || matrixData[i][j] && i !== j) {
                return false;
            }
        }
    }
    return true;
}

console.log(isIdentityMatrix([[1, 0, 0], [0, 1, 0], [0, 0, 1]]))
console.log(isIdentityMatrix([[1, 0, 1], [0, 1, 0], [0, 0, 1]]))