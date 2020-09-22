
document.getElementById('btn').addEventListener('click', function () {
    var today = new Date();
    var cmas = new Date(today.getFullYear(), 11, 25);
    console.log(cmas);
    if (today.getMonth() == 11 && today.getDate() > 25) {
        cmas.setFullYear(cmas.getFullYear() + 1);
        console.log(cmas);
    }
    var oneDay = 1000 * 60 * 60 * 24;
    var result = Math.ceil((cmas.getTime() - today.getTime()) / (oneDay)) + " days left until Christmas !";
    document.querySelector('h2').innerText = result;
})