function primeFactors(num) {
    function isPriem(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }

        }
        return true;
    }

    const result = [];
    for (let i = 2; i <= num; i++) {
        while (isPriem(i) && num % i === 0) {
            if (!result.includes(i)) {
                result.push(i);
            }
            num /= i;
        }
    }
    return result;
}

console.log(primeFactors(100));
console.log(primeFactors(101));
console.log(primeFactors(103));
console.log(primeFactors(104));
console.log(primeFactors(105));