function nearestNum(x, y) {
    if (x != y) {
        var x1 = Math.abs(x - 100);
        var y1 = Math.abs(y - 100);
        console.log(x1, y1);

        if (x1 < y1) {
            return x;
        } if (y1 < x1) {
            return y;
        }
    } else {
        return false;
    }

}

console.log(nearestNum(120, 130));
console.log(nearestNum(-90, -89));
console.log(nearestNum(90, 90));

// function near_100(x, y) {
//     if (x != y) {
//         x1 = Math.abs(x - 100);
//         y1 = Math.abs(y - 100);

//         if (x1 < y1) {
//             return x;
//         }
//         if (y1 < x1) {
//             return y;
//         }
//         return 0;
//     }
//     else
//         return false;
// }

// console.log(near_100(90, 89));
// console.log(near_100(-90, -89));
// console.log(near_100(90, 90));