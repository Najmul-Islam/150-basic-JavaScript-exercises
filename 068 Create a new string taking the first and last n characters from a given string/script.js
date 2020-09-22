function twoString(str, n) {
    firstPart = str.substring(0, n);
    console.log(firstPart);
    lastPart = str.substring(str.length - n);
    console.log(lastPart);
    return firstPart + lastPart;
}

console.log(twoString("JavaScript", 2));
// console.log(twoString("JavaScript", 3));