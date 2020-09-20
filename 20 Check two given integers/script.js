// function positive_negative(x, y) {
//     if (x < 0 && y > 0 || x > 0 && y < 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(positive_negative(2, 2))
// console.log(positive_negative(-2, 2))
// console.log(positive_negative(2, -2));
// console.log(positive_negative(-2, -2));

document.getElementById('btn').addEventListener('click', function () {
    const firstValue = parseInt(document.getElementById('input1').value);
    const secondValue = parseInt(document.getElementById('input2').value);

    if (firstValue < 0 && secondValue > 0 || firstValue > 0 && secondValue < 0) {
        var result = true;
    } else {
        var result = false;
    }
    document.getElementById('result').innerText = result;
})