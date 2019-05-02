// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    //return Math.ceil(distance / 264) ; 
    return distance > 42 ? distance - 42 : 42 - distance
}

function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(d1, d2) {
    return d1 > d2 ? (d1 - d2) * 264 : (d2 - d1) * 264;
}

function calculatesFarePrice(start, destination) {
    let trip = distanceTravelledInFeet(start, destination);
    if (trip < 400) {
        return 0;
    } else if (trip > 399 && trip < 2000) {
        return (trip - 400) * 0.02;
    } else if (trip > 1999 && trip < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}