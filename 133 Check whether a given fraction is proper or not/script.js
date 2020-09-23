function properImproperText(num) {
    return Math.abs(num[0] / num[1]) < 1 ? "Proper fraction." : "Improper fraction.";
}

console.log(properImproperText([12, 300]));
console.log(properImproperText([2, 4]));
console.log(properImproperText([103, 3]));
console.log(properImproperText([104, 2]));
console.log(properImproperText([5, 40]));