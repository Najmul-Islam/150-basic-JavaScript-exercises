// function test37(x) {
//     if (x % 3 == 0 || x % 7 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(test37(12));
// console.log(test37(14));
// console.log(test37(10));
// console.log(test37(11));

document.getElementById('btn').addEventListener('click', function () {
    const inValue = parseInt(document.getElementById('input').value);
    if (inValue % 3 == 0 || inValue % 7 == 0) {
        var result = true;
    } else {
        var result = false;
    }
    document.getElementById('result').innerText = result;

})