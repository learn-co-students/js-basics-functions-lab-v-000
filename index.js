// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    if (distance <= 42){
        return 42 - distance;
    } else {
        return distance - 42;
    }
}

function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInBlocks(start, end){
    if (start <= end){
        return end - start;
    } else {
        return start - end;
    }
}

function distanceTravelledInFeet(start, end){
    return distanceTravelledInBlocks(start, end) * 264;
}

function calculatesFarePrice(start, end){
    let trip = distanceTravelledInFeet(start, end);
    if (trip > 2500) {
        return 'cannot travel that far'
    } else if (trip < 400) {
        return 0;
    } else if (trip > 2000) {
        return 25;
    } else {
        return (trip - 400) * 0.02;
    }
}