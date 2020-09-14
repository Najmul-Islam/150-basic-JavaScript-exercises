document.getElementById('ctof').addEventListener('click', function () {

    var cTemp = document.getElementById('input').value;
    var cToFahr = cTemp * 9 / 5 + 32;
    var result = `${cTemp}\xB0C is ${cToFahr}\xB0F.`;
    document.getElementById('result').innerText = result;
});

document.getElementById('ftoc').addEventListener('click', function () {
    var fTemp = document.getElementById('input').value;
    var fToCel = (fTemp - 32) * 5 / 9;
    var result = `${fTemp}\xB0F is ${fToCel} \xB0C.`;
    document.getElementById('result').innerText = result;
});

