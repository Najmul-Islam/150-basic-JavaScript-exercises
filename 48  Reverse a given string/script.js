function stringReverse(str) {
    var str1 = str.split('');
    console.log(str1);
    var str2 = str.split('').reverse();
    console.log(str2);
    var str3 = str2.join("");
    console.log(str3);

    return str3
}

console.log(stringReverse("w3resource"));
// console.log(stringReverse("www"));
// console.log(stringReverse("JavaScript"));