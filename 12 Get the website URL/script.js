document.getElementById('btn').addEventListener('click', function () {
    var result = document.URL;
    document.getElementById('show').setAttribute('href', result);
    document.getElementById('show').innerText = result;
    console.log(result);

})
