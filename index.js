// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42);
}

function distanceFromHqInFeet(blocks) {
    return Math.abs(distanceFromHqInBlocks(blocks) * 264)
}

function distanceTravelledInFeet(start, end) {
    return Math.abs(distanceFromHqInFeet(end) - distanceFromHqInFeet(start))
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if ( distance > 2500) {
        return 'cannot travel that far';
    } else if (distance > 2000) {
        return 25;
    } else if (distance > 400) {
        return distance * 0.02;
    } else {
        return 0;
    }
}