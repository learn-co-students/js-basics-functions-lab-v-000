function calculateVertical(beginningBlock, endingBlock) {
    return (endingBlock - beginningBlock) * 264
}

function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42);
    // if (block > 42) {
    //     return (block - 42);
    // }
    // else {
    //     return (42 - block);
    // }
}

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet (beginningBlock, endingBlock) {
    return Math.abs(endingBlock - beginningBlock) * 264;
}

function calculatesFarePrice(beginningBlock, endingBlock) {
    const feet = distanceTravelledInFeet(beginningBlock, endingBlock);
    if (feet <= 400) {
        return 0;
    }
    else if (feet > 400 && feet <= 2000) {
        return (feet * 2)/100;
    }
    else if (feet > 2000 && feet < 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}