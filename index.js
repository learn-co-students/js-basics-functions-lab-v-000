// Code your solution in this file!
function distanceFromHqInBlocks(location){
    let blocks;
    location >= 42 ? blocks = location - 42 : blocks = 42 - location;

    return blocks;
}

function distanceFromHqInFeet(location){
    let feet;
    feet = distanceFromHqInBlocks(location)*264;

    return feet;
}

function distanceTravelledInFeet(startBlock, endBlock) {
    let diff, feet;
    startBlock >= endBlock ? diff = startBlock - endBlock : diff = endBlock - startBlock;
    feet = diff*264;

    return feet;
}

function calculatesFarePrice(startBlock, endBlock) {
    let feet, freeFeet, price, response;
    feet = distanceTravelledInFeet(startBlock, endBlock);
    freeFeet = 400;

    if (feet <= freeFeet) {
        price = 0;
        return price;
    } else if (feet > freeFeet && feet <= 2000) {
        price = (feet - freeFeet)*.02;
        return price;
    } else if (feet > 2000 && feet <= 2500) {
        price = 25;
        return price;
    } else if (feet >= 2500) {
        response = "cannot travel that far";
        return response;
    }
}