// Code your solution in this file!

function distanceFromHqInBlocks(block) {
    if (block > 42) {
        return block - 42;
    } else {
        return 42 - block;
    }
}

function distanceFromHqInFeet(block) {
    const blocks = distanceFromHqInBlocks(block);
    const feet = blocks * 264;
    return feet;
}

function distanceTravelledInFeet(start, destination) {
    return distanceFromHqInFeet(destination) - distanceFromHqInFeet(start);
}

function calculatesFarePrice(start, destination){
    feet = distanceTravelledInFeet(start, destination);
    if (feet <= 400) {
        return 0;
    } else if (feet > 400 && feet < 2000) {
        const charged = feet - 400;
        const price = charged * 0.02;
        return price;
    } else if (feet > 2000 && feet < 2500) {
        return 25;
    } else{
        return 'cannot travel that far';
    }
}
