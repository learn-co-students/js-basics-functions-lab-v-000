// Code your solution in this file!
function distanceFromHqInBlocks(x) {
    return Math.abs(x - 42);
}

function distanceFromHqInFeet(x) {
    var blocks = distanceFromHqInBlocks(x);
    return blocks * 264;
}

function distanceTravelledInFeet(x, y) {
    return Math.abs((x - y) * 264);
}

function calculatesFarePrice(x, y) {
    var feet = distanceTravelledInFeet(x, y);
    if (feet < 400) {
        return 0;
    } else if (feet > 400 && feet < 2000) {
        return feet * .02;
    } else if (feet > 2000 && feet < 2500) {
        return 25;
    } else {
        return "cannot travel that far"
    }
}