// Code your solution in this file!
function distanceFromHqInBlocks (blocks) {
    let hqDistance = 42;
    let distance = blocks - hqDistance;
    
    if (distance >= hqDistance) {
        return distance;
    }
    else if (distance <= hqDistance){
        return Math.abs(distance);
    }
}

function distanceFromHqInFeet (blocks){
    return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet (start, end) {
    let feet = (end - start) * 264;

    if (feet < 0) {
        return Math.abs(feet);
    }
    else if (feet > 0) {
        return feet;
    }
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    let fare ;
    if (distance <= 400) {
        return fare = 0;
    }

    else if (distance > 400 && distance <= 2000) {
        let fare = (distance - 400) * 0.02;
        return fare;
    }

    else if (distance > 2000 && distance < 2500) {
        let fare = 25 
        return fare;
    }

    else if (distance >= 2500) {
        return 'cannot travel that far';
    }
}