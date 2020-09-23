function sumDigitsFromString(dstr) {
    var dsum = 0;

    for (var i = 0; i < dstr.length; i++) {
        if (/[0-9]/.test(dstr[i])) dsum += parseInt(dstr[i]);
    }
    return dsum;
}

console.log(sumDigitsFromString("abcd12efg9"))
console.log(sumDigitsFromString("w3resource"))