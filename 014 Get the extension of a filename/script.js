// var fileName = "system.php";
// var result = fileName.split('.').pop();

// console.log(result);
document.getElementById('btn').addEventListener('click', function () {
    let fileName = document.getElementById('input').value;
    let fileExe = fileName.split('.').pop();
    document.getElementById('result').innerText = fileExe;
})