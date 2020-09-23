function simplifyPath(mainPath) {
    var parts = mainPath.split('/'),
        newPath = [],
        length = 0;
    for (var i = 0; i < parts.length; i++) {
        var part = parts[i];
        if (part === '.' || part === '' || part === '..') {
            if (part === '..' && length > 0) {
                length--;
            }
            continue;
        }
        newPath[length++] = part;

    }
    if (length === 0) {
        return '/';
    }

    var result = '';
    for (var i = 0; i < length; i++) {
        result += '/' + newPath[i];
    }
    return result;
}

console.log(simplifyPath("/home/var/./www/../html//sql/"));