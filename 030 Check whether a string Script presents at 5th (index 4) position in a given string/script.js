function check_script(str) {
    if (str.length < 6) {
        return str;
    } else {
        //let result_str = str;
        //console.log(result_str);
        if (str.substring(10, 4) == "Script") {
            result_str = str.substring(0, 4) + str.substring(10, str.length);
            console.log(result_str);
        }
        return result_str;
    }
}

console.log(check_script("JavaScript"));
// console.log(check_script("CoffeeScript"));