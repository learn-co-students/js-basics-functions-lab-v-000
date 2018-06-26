// Code your solution in this file!

function distanceFromHqInBlocks(location) {
    return Math.abs(42 - location)
}

function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
    const totalFeet = distanceTravelledInFeet(start, destination);
    if (totalFeet <= 400) {
        return 0;
    } else if (totalFeet > 400 && totalFeet <= 2000) {
        return (totalFeet - 400) * 0.02;
    } else if (totalFeet > 2000 && totalFeet <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}