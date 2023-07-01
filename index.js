// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, end) {
    let blocks = Math.abs(start - end);
    return blocks * 264;
}

function calculatesFarePrice(start, end) {
    let dist = distanceTravelledInFeet(start, end);
    
    if (dist <= 400) {
        return 0;
    } else if (dist > 400 && dist < 2000) {
        return (dist - 400) * .02;
    } else if (dist >= 2000 && dist < 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
    
}
