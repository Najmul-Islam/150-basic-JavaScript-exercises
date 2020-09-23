function sortPrime(num) {
    var primeNum1 = [],
        primeNum2 = [];

    for (var i = 0; i <= num; i++) {
        primeNum2.push(true);
    }
    for (var i = 2; i <= num; i++) {
        if (primeNum2[i]) {
            primeNum1.push(i);
            for (var j = 1; i * j <= num; j++) {
                primeNum2[i * j] = false;
            }
        }
    }
    return primeNum1;
}

console.log(sort_prime(5))
console.log(sort_prime(11))
console.log(sort_prime(19))