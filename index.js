// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    const hqBlock = 42;
    return Math.abs(block - hqBlock);
}

function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(startBlock, endBlock) {
    return Math.abs(startBlock - endBlock) *264;
}

function calculatesFarePrice(start, destination) {

    let distance = distanceTravelledInFeet(start, destination);
     
        if (distance > 400 && distance < 2000) {
            return distance * 0.02;
        } else if (distance > 2000 && distance < 2500) {
            return 25;
        } else if (distance > 2500) {
            return 'cannot travel that far';
        } else {
            return 0;
        }
}
