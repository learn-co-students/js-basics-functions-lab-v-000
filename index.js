// Code your solution in this file!

function distanceFromHqInBlocks(blockNumber) {
    return Math.abs(42 - blockNumber)
}

function distanceFromHqInFeet(blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet(startBlock, endBlock) {
    return Math.abs(startBlock - endBlock) * 264
}

function calculatesFarePrice(start, destination) {
    let tripDistance = distanceTravelledInFeet(start, destination);
    let chargeableDistance = tripDistance - 400;

    if (tripDistance <= 400) {
        return 0;
    } else if (tripDistance > 400 && tripDistance < 2000) {
            return (chargeableDistance * 2)/100;
    } else if (tripDistance > 2000 && tripDistance < 2500) {
            return 25;
    } else { 
            return "cannot travel that far";
    }
}