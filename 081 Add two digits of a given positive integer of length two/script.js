function addTwoDig(num) {
    return num % 10 + Math.floor(num / 10);
}

console.log(addTwoDig(25));

function addAllDig(n) {
    let arr = n.toString().split('');
    for (let e of arr) arr[arr.indexOf(e)] = parseInt(e)
    return arr.reduce((p, c) => p + c);
}
console.log(addAllDig(25))