// function testHundred(x) {
//     return ((Math.abs(100 - x) <= 20) || (Math.abs(400 - x) <= 20));
// }

// console.log(testHundred(10));
// console.log(testHundred(90));
document.getElementById('btn').addEventListener('click', function () {
    const inValue = parseInt(document.getElementById('input').value);
    if ((Math.abs(100 - inValue) <= 20) || (Math.abs(400 - inValue) <= 20)) {
        var result = true;
    } else {

        var result = false;
    }
    document.getElementById('result').textContent = result;

})