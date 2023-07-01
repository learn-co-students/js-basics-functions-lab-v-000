// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    if (blocks > 42) {
        return blocks - 42;
    } else {
        return 42 - blocks;
    }
}

function distanceFromHqInFeet(blocks) {
   return  distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
    return (start - destination) * 264;
    } else {
    return (destination - start) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    if (distance < 400) {
    return 0;
    } else if ( 400 <= distance && distance < 2000) {
        return 10.56;
    } else if (2000 <= distance && distance < 2500) {
        return 25;
    } else if (distance > 2500) {
        return "cannot travel that far";
    }
}