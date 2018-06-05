// Code your solution in this file!
function distanceFromHqInBlocks(location){
    return Math.abs(location - 42);
}

function distanceFromHqInFeet(location) {
    return 264 * distanceFromHqInBlocks(location);
}

function distanceTravelledInFeet(start, dest){
    return 264 * Math.abs(dest - start);
}

function calculatesFarePrice(start, dest){
    distanceInFeet = distanceTravelledInFeet(start, dest);

    if (distanceInFeet > 2500) {
        return 'cannot travel that far';
    }
    else if (distanceInFeet > 2000) {
        return 25;
    }
    else if (distanceInFeet > 400) {
        return (distanceInFeet - 400) * 0.02;
    }
    else {
        return 0;
    }
}