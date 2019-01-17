// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    // returns distance in blocks
    return Math.abs(street - 42);
}

function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(startStreet, endStreet) {
    return Math.abs(startStreet - endStreet) * 264;
}

function calculatesFarePrice(start, destination) {
    const totalDistance = distanceTravelledInFeet(start, destination);

    if (totalDistance > 0 && totalDistance <= 400) {
        return 0;
    } else if (totalDistance > 400 && totalDistance <= 2000) {
        return (totalDistance - 400) * 0.02;
    } else if (totalDistance > 2000 && totalDistance <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}
