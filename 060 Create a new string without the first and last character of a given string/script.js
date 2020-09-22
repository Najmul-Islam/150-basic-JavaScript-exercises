function withoutFirstEnd(str) {
    return str.substring(1, str.length - 1);
}

console.log(withoutFirstEnd('JavaScript'));
console.log(withoutFirstEnd('JS'));
console.log(withoutFirstEnd('PHP'));