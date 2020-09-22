var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
if (month < 10) {
    month = "0" + month;
}
if (day < 10) {
    month = "0" + day;
}

document.querySelector('#data1').textContent = month + ' - ' + day + ' - ' + year;
document.querySelector('#data2').textContent = month + ' / ' + day + ' / ' + year;
document.querySelector('#data3').textContent = day + ' - ' + month + ' - ' + year;
document.querySelector('#data4').textContent = day + ' / ' + month + ' / ' + year;