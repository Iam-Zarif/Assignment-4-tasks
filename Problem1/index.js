
function radianToDegree(radian) {
    const pi = 3.1416;
    radian = radian * (180/pi);
    return radian.toFixed(2);

}
let red = 25;
console.log(radianToDegree(red));