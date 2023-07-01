// Code your solution in this file!
const hq = 42;

function distanceFromHqInBlocks(param) {
    let distance = hq - param;
    if (distance < 0) {
        return distance * -1
    };
    return distance;
};

function distanceFromHqInFeet(param) {
    return distanceFromHqInBlocks(param) * 264; 
};

function distanceTravelledInFeet(paramFrom, paramTo) {
    let distanceTo = distanceFromHqInFeet(paramFrom) - distanceFromHqInFeet(paramTo);
    if (distanceTo < 0) {
        return distanceTo * -1;
    };
    return distanceTo;
};

function calculatesFarePrice(paramFrom, paramTo) {
    let distanceCalculated = distanceTravelledInFeet(paramFrom, paramTo);
    if (distanceCalculated < 400) {
        return 0;
    } else if (distanceCalculated > 2500) {
        return 'cannot travel that far';
    } else if (distanceCalculated > 2000) {
        return 25;
    };
    return (distanceCalculated - 400) * 0.02;
};