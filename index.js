function distanceFromHqInBlocks (block) {
    if (block > 42) {
        return block - 42;
    } else {
        return 42 - block;
    }
}

function distanceFromHqInFeet (block) {
    return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet (beginning, destination) {
   if (beginning < destination) {
    return (destination - beginning) * 264;
   } else {
       return (beginning - destination) * 264;
   }
}

function calculatesFarePrice (beginning, destination) {
    const distance = distanceTravelledInFeet(beginning, destination);
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return 0.02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}