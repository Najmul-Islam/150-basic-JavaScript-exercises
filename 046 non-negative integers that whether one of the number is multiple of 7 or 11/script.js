function multiple7or11(num1, num2) {
    if (num1 > 0 && num2 > 0) {

        if (!((num1 % 7 == 0 || num1 % 11 == 0) && (num2 % 7 == 0 || num2 % 11 == 0))) {
            if (num1 % 7 == 0 || num1 % 11 == 0 || num2 % 7 == 0 || num2 % 11 == 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }

    }
}
console.log(multiple7or11(14, 21));
console.log(multiple7or11(14, 20));
console.log(multiple7or11(16, 20));