// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    let result; 
    if (block > 41) {
        result = block - 42; 
    }
    else {
        result = 42 - block; 
    }
    return result

}
function distanceFromHqInFeet(block) {
    let result; 
        result = distanceFromHqInBlocks(block) * 264;
    return result
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
    let result; 
    if (startingBlock > endingBlock) {
        result = (startingBlock - endingBlock) * 264;
    }
    else {
        result = (endingBlock - startingBlock) * 264;

    }
    
    return result;
}

function calculatesFarePrice(startingBlock, endingBlock) {
    let result; 
    let distance; 
    distance = distanceTravelledInFeet(startingBlock, endingBlock); 

    if (distance <= 400) {
        result = 0; 
    }
    else if (distance <= 2000) {
        result = (distance - 400) * 0.02;
    }
    else if (distance <= 2500) {
        result = 25
    }
    else {
        result = "cannot travel that far";
    }

    return result
}
