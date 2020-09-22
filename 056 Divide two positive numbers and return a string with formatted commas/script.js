
n1 = 80;
n2 = 6;

var div = Math.round(n1 / n2).toString(),
    resultArray = div.split("");

if (div >= 1000) {
    for (var i = div.length - 3; i > 0; i -= 3) {
        resultArray.splice(i, 0, ",");
    }
    resultArray;
}
console.log(resultArray);
