function alphabetOrder(str) {
    return str.split('').sort().join('');
}

console.log(alphabetOrder("dcab"));
console.log(alphabetOrder("Python"));
console.log(alphabetOrder("Exercises"));

let numbers = [4, 2, 5, 1, 11, 3];
numbers.sort((a, b) => a - b);
console.log(numbers.join(''));