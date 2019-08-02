// Code your solution in this file!
function distanceFromHqInBlocks (block) {
    let distance;
    distance = Math.abs(42 - block);
    return distance;
}

function distanceFromHqInFeet (block) {
    let feet = distanceFromHqInBlocks(block) * 264;
    return feet;
}

function distanceTravelledInFeet (block1, block2) {
    let blocks = Math.abs(block1 - block2);
    let totalDistance = blocks * 264;
    return totalDistance;
}

function calculatesFarePrice (start, destination) {
    let fare;
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400){
        fare = 0;
    } else if (distance >= 400 && distance <= 2000) {
        fare = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500) {
        fare = 25;
    } else if (distance > 2500) {
        fare = 'cannot travel that far'
    }
    return fare;
}