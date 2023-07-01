// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    if (block < 42) {
        return 42 - block;
    } else {
        return block - 42;
    }
}

function distanceFromHqInFeet(block) {
    const blocks = distanceFromHqInBlocks(block);
    const feet = blocks * 264;
    return feet;
}

function distanceTravelledInFeet(startingBlock, destinationBlock) {
    return distanceFromHqInFeet(destinationBlock) - distanceFromHqInFeet(startingBlock);
}

function calculatesFarePrice(start, destination) {
    feet = distanceTravelledInFeet(start, destination);
    if (feet <= 400) {
        return 0;
    } else if (feet > 400 && feet <= 2000) {
        const chargedFootage = feet - 400;
        const price = chargedFootage * 0.02;
        return price;
    } else if (feet > 2000 && feet < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
