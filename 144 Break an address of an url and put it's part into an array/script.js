function breakAddress(urlAdd) {
    var data = urlAdd.split("://");
    var protocol = data[0];
    data = data[1].split(".com");
    var domain = data[0];
    data = data[1].split("/");

    if (data[1]) {
        return [protocol, domain, data[1]]
    }
    return [protocol, domain];
}

var url_add = "https://www.w3resource.com/javascript-exercises/"
console.log("Original address: " + url_add)
console.log(breakAddress(url_add))