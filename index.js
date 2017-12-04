// Code your solution in this file!
function distanceFromHqInBlocks (blockNumber) {
    if (blockNumber > 42) {
        return blockNumber - 42;
    } else {
        return 42 - blockNumber;
    }
}

function distanceFromHqInFeet (blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet (startingBlock, endingBlock) {
    return Math.abs((endingBlock - startingBlock)) * 264;
}

function calculatesFarePrice (startingBlock, endingBlock) {
    let dist = distanceTravelledInFeet(startingBlock, endingBlock);
    if (dist <= 400) {
        return 0;
    } else if ((dist >= 400) && (dist <= 2000)) {
        return dist * 0.02;
    } else if ((dist > 2000) && (dist <= 2500)) {
        return 25;
    } else if (dist > 2500) {
        return "cannot travel that far";
    }
}