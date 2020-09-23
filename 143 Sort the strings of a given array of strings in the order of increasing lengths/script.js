function sortByStringLength(arra) {
    for (var i = 0; i < arra.length; i++) {
        for (var j = i + 1; j < arra.length; j++) {
            if (arra[i].length > arra[j].length) {
                var m = arra[i];
                arra[i] = arra[j];
                arra[j] = m;
            }
        }
    }
    return arra;
}

var arra = ["xyz", "acd", "aa", "bb", "zzz", "", "a", "b"];
console.log("Original array: " + arra + "\n");
console.log(sortByStringLength(["xyz", "acd", "aa", "bb", "zzz", "", "a", "b"]));