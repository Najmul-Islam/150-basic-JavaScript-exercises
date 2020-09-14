
const mBtn = document.getElementById('multiply');
mBtn.addEventListener('click', function () {
    let firstV = document.getElementById('1stinput').value;
    let secondV = document.getElementById('2ndinput').value;
    let result = firstV * secondV;
    document.getElementById('result').innerText = "Multiply: " + result;
})

const dBtn = document.getElementById('divide');
dBtn.addEventListener('click', function () {
    let firstV = document.getElementById('1stinput').value;
    let secondV = document.getElementById('2ndinput').value;
    let result = firstV / secondV;
    document.getElementById('result').innerText = "Divide:" + result;
})
// const buttons = document.querySelectorAll('.btn');
// buttons.forEach(function (button) {
//     button.addEventListener('click', function (e) {

//         let filter = e.target.dataset
//         if (filter === "multiply") {
//             var result = firstV * secondV;
//         } else if (filter === "divide") {
//             var result = firstV * secondV;
//         }

//         document.getElementById('result').innerText = result;


//     })
// })