function longestStrInArray(arra) {
    var maxstr = arra[0].length;

    var ans = arra[0];
    for (var i = 1; i < arra.length; i++) {
        var maxi = arra[i].length;
        if (maxi > maxstr) {
            ans = arra[i];
            maxstr = maxi;
        }
    }
    return ans;
}

console.log(longestStrInArray(["ab", "a", "abcd"]));
console.log(longestStrInArray(["ab", "ab", "ab"]));