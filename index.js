
function distanceFromHqInBlocks(endSt) {
    return Math.abs(endSt-42);
}

function distanceFromHqInFeet(endSt) {
    blocks = distanceFromHqInBlocks(endSt);
    return (blocks * 264);
}

function distanceTravelledInFeet(startSt, endSt){
    stDifference = Math.abs(endSt - startSt);
    return (stDifference * 264);
}

function calculatesFarePrice(start, destination) {
    feetTraveled = distanceTravelledInFeet(start, destination);
    cost = 0;
    if (feetTraveled <= 400) {
        cost = 0;
    } else if (feetTraveled > 400 && feetTraveled <= 2000) {
        cost = 0.02 * feetTraveled;   
    } else if (feetTraveled > 2000 && feetTraveled <= 2500) {
        cost = 25;
    } else if (feetTraveled > 2500){
        return 'cannot travel that far';
    }
    return cost;
}
