// Code your solution in this file!
function distanceFromHqInBlocks(destinationBlock) {
    distanceInBlocks = destinationBlock - 42;
    if (destinationBlock >= 42) {
        return distanceInBlocks;
    } else {
        return -distanceInBlocks;
    }
}

function distanceFromHqInFeet(destinationBlock) {
    return distanceInFeet = distanceFromHqInBlocks(destinationBlock) * 264;
}

function distanceTravelledInFeet(originationBlock, destinationBlock) {
    distanceInBlocks = destinationBlock - originationBlock;
    if (distanceInBlocks < 0) {
        distanceInBlocks = -distanceInBlocks;
    }
    return distanceInFeet = distanceInBlocks * 264;
}

function calculatesFarePrice(start, destination) {
    let distanceForFare = distanceTravelledInFeet(start, destination);
    if (distanceForFare <= 400) {
        return 0;
    } else if (distanceForFare > 400 && distanceForFare <= 2000) {
        let chargableDistance = distanceForFare - 400;
        return chargableDistance * 0.02;
    } else if (distanceForFare > 2000 && distanceForFare <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}