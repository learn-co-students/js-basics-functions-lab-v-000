// Code your solution in this file!
function distanceFromHqInBlocks(finish){
    officeLocation = 42;
    return Math.abs(finish - officeLocation);
}

function distanceFromHqInFeet(finish){
    return distanceFromHqInBlocks(finish) * 264;
}

function distanceTravelledInFeet(start, finish){
    return (Math.abs(finish - start) * 264);
}

function calculatesFarePrice(start, finish){
    let distance = distanceTravelledInFeet(start, finish);
    if (distance <= 400) {
        return 0;
    } else if (400 < distance && distance <= 2000 ) {
        return (distance - 400) * 0.02;
    } else if (distance  > 2000 && distance < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}



