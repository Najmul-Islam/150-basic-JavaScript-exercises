function differentValues(ara, n) {
    var maxVal = -1;
    for (var i = 0; i < ara.length; i++) {
        for (var j = i + 1; j < ara.length; j++) {
            var x = Math.abs(ara[i] - ara[j]);

            if (x <= n) {
                maxVal = Math.max(maxVal, x)
            }
        }
    }

    return maxVal;
}

console.log(differentValues([12, 10, 33, 34], 10));
console.log(differentValues([12, 10, 33, 34], 24));
console.log(differentValues([12, 10, 33, 44], 40));