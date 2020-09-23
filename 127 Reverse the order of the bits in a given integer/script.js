function mirrorBits(n) {
    return parseInt(n.toString(2).split("").reverse().join(""), 2)
}

console.log(mirrorBits(56));
console.log(mirrorBits(234));