// const num = Math.ceil(Math.random() * 10);
// console.log(num);
// const gnum = document.getElementById('input').value;
// if (gnum == num) {
//     document.getElementById("show").innerTex = "Matched";
// } else {
//     document.getElementById("show").innerTex = "Not matched, the number was " + gnum;
// }

document.getElementById('btn').addEventListener('click', function () {

    const gnum = document.getElementById('input').value;
    const num = Math.ceil(Math.random() * 10);
    if (gnum == num) {
        document.getElementById("show").innerText = "Matched";
    } else {
        document.getElementById("show").innerText = "Not matched, the number was " + num;
    }

})