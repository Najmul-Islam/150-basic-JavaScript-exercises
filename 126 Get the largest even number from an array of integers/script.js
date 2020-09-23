function maxEven(arra) {
    arra.sort((x, y) => y - x);

    for (var i = 0; i < arra.length; i++) {
        if (arra[i] % 2 == 0) {
            return arra[i];
        }
    }
}

console.log(maxEven([20, 40, 200]));
console.log(maxEven([20, 40, 200, 301]));