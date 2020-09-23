function numberOfinversionsNaive(arr) {
    var ctr = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                ctr++;
            }
        }
    }
    return ctr;
}

console.log(numberOfinversionsNaive([0, 3, 2, 5, 9]));
console.log(numberOfinversionsNaive([1, 5, 4, 3]));
console.log(numberOfinversionsNaive([10, 30, 20, -10])); 