function testLogicalNor(a, b) {
    return (!a && !b);
}

console.log(testLogicalNor(true, false));
console.log(testLogicalNor(false, false));
console.log(testLogicalNor(true, true));