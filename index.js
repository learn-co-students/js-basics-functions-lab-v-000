// Code your solution in this file!
function distanceFromHqInBlocks(pos) {
    let distance = 0;
    if (pos > 42) {
        distance = pos - 42;
    } else {
        distance = 42 - pos;
    }
    return distance;
}

function distanceFromHqInFeet(pos) {
    let distance = distanceFromHqInBlocks(pos) * 264;
    return distance;
}

function distanceTravelledInFeet(start, finish) {
    let distance = 0;
    distance = Math.abs(start - finish) * 264;
    return distance;
}

function calculatesFarePrice(start, destination) {
    let fare = 0;
    let response = "cannot travel that far";
    let traveldistance = 0;
    traveldistance = distanceTravelledInFeet(start, destination);

    if (traveldistance <= 400) {
        fare = 0;
    } else if (traveldistance <= 2000) {
        fare = (traveldistance - 400) * 0.02;
    } else if (traveldistance > 2000 && traveldistance < 2500) {
        fare = 25;
    } else {
        fare = "cannot travel that far";
    }
    return fare;
}