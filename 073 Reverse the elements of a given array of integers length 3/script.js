function reverse3(array) {
    var result = array.map(function (element, idx, arr) {
        console.log(idx);
        let arrey = arr[(arr.length - 1) - idx];

        return arrey;

    })
    return result;

}

console.log(reverse3([5, 4, 3]));
// console.log(reverse3([1, 0, -1]));
// console.log(reverse3([2, 3, 1]));