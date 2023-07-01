// Code your solution in this file!

function distanceFromHqInBlocks(startingBlock){
   return Math.abs(42 - startingBlock)
}

function distanceFromHqInFeet(startingBlock){
    return distanceTravelledInFeet(startingBlock, 42)
}

function distanceTravelledInFeet(start, end){
    return blockToFeet(Math.abs(end - start))
}

function blockToFeet(block){
    return block * 264;
}

function calculatesFarePrice(start, end){
    dist = distanceTravelledInFeet(start, end);
    if (dist > 2500){
        return 'cannot travel that far';
    }else if (dist > 2000){
        return 25;
    }else if (dist > 400){
        return .02 * (dist - 400);
    }else{
        return 0;
    }
}