function noP(str) {
    let startPos = 0;
    let endPos = str.length;
    if (str.length > 0 && str.charAt(0) == 'P') {
        startPos = 1;
    } if (str.length > 1 && str.charAt(str.length - 1) == 'P') {
        endPos--;
    }
    return str.substring(startPos, endPos);
}

console.log(noP("PythonP"));
console.log(noP("Python"));
console.log(noP("JavaScript"));