// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    let distance;
    distance = someValue - 42;
    return Math.abs(distance);
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, stop) {
    let blocks;
    blocks = start - stop;
    blockTotal = Math.abs(blocks) * 264
    return blockTotal
} 

function calculatesFarePrice(start, stop) {
    let feet, fare;
    feet = distanceTravelledInFeet(start, stop)
    if (feet <= 400) {
        return 0;
    } else if (feet >= 400 && feet <= 2000) {
        return ((feet - 400) * 2) / 100;
    } else if (feet > 2000 && feet <= 2500) {
        return 25;
    } else {
        return "cannot travel that far"
    }
}