function sumOfCubes(n) {
    var sumn = 0;

    for (var i = 1; i <= n; i++) {
        sumn += Math.pow(i, 3);
    }
    return sumn;
}

console.log(sumOfCubes(3));
console.log(sumOfCubes(4));