function concatTwostr(str1, str2) {
    var stra1 = str1.substring(1, str1.length);
    var stra2 = str2.substring(1, str2.length);

    return stra1 + stra2;
}

console.log(concatTwostr("PHP", "JS"));
console.log(concatTwostr("A", "B"));
console.log(concatTwostr("AA", "BB"));