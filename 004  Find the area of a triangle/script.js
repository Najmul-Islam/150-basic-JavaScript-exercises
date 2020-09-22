// var side1 = 5;
// var side2 = 6;
// var side3 = 7;
// var s = (side1 + side2 + side3) / 2;
// var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));

document.querySelector('#btn').addEventListener('click', function () {
    const side1 = parseInt(document.querySelector('#side1').value);
    const side2 = parseInt(document.querySelector('#side2').value);
    const side3 = parseInt(document.querySelector('#side3').value);

    var s = (side1 + side2 + side3) / 2;
    var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
    document.querySelector('#result').innerText = area;
});

// const side1p = Number(side1.value);
// const side2p = Number(side2);
// const side3p = Number(side3);

// const btn = document.querySelector('#btn');
// btn.addEventListener('click', () => {


//     let s = (side1p + side2p + side3p) / 2;
//     let area = Math.sqrt(s * ((s - side1p) * (s - side2p) * (s - side3p)));

//     document.querySelector("#result").textContent = area;
// })