// Code your solution in this file!
function distanceFromHqInBlocks(num) {
    if (num > 42) {
        return num-42;
    } else {
        return (42 - num);
    }
}

function distanceFromHqInFeet(num) {
    return distanceFromHqInBlocks(num) * 264;
}

function distanceTravelledInFeet(x, y) {
    if (x > y) {
        return (x-y) * 264;
    } else {
        return (y-x) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    dist = distanceTravelledInFeet(start, destination);
    
    if (dist < 400) {
        return 0;
    } else if (dist < 2000) {
         return 0.02* dist;
    } else if (dist < 2500) {
         return 25;
    } else {
        return 'cannot travel that far';
    }
    
}