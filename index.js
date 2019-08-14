// Code your solution in this file!
function distanceFromHqInBlocks(value) {
    let result;
    result = value - 42;
    if (result < 0) {
        result = result * -1;
    }
    return result;
}

function distanceFromHqInFeet(value) {
    let blocks = distanceFromHqInBlocks(value);
    return blocks * 264;
}

function distanceTravelledInFeet(value1, value2) {
    let difference = value1 - value2;
    if (difference < 0) {
        difference = difference * -1;
    }
    return difference * 264;
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    let price;
    if (distance <= 400) {
        price = 0;
    }
    else if (distance > 400 && distance <= 2000) {
        price = (distance - 400) * 0.02;
    }
    else if (distance > 2000 && distance <= 2500) {
        price = 25;
    }
    else if (distance > 2500) {
        price = "cannot travel that far";
    }
    return price;
}s