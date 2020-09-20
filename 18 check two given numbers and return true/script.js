// function test50(n1, n2) {
//     if (n1 + n2 == 50 || n1 == 50 || n2 == 50) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(test50(50, 10));
// console.log(test50(30, 20));
// console.log(test50(20, 20));

document.getElementById('btn').addEventListener('click', function () {
    const inValue1 = parseInt(document.getElementById('num1').value);
    const inValue2 = parseInt(document.getElementById('num2').value);
    if (inValue1 + inValue2 == 50 || inValue1 == 50 || inValue2 == 50) {
        var result = true;
    } else {
        var result = false;
    }
    document.getElementById('result').innerText = result;
})