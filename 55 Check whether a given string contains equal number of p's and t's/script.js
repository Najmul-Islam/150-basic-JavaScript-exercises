function equalPT(str) {
    var strP = str.replace(/[^p]/g, '');
    var strT = str.replace(/[^t]/g, '');

    var pNum = strP.length;
    var sNum = strT.length;

    return pNum === sNum;
}

console.log(equalPT("paatpss"));
console.log(equalPT("paatps"));