// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
    return Math.abs(pickup-42);
};

function distanceFromHqInFeet(pickup){
    return distanceFromHqInBlocks(pickup)*264;
};

function distanceTravelledInFeet(start, end){
    return Math.abs(start-end)*264;
};

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start,destination);

    if (distance > 2500){
        return 'cannot travel that far';
    } else if (distance < 400) {
        return 0;
    } else if (distance <2000){
        return 0.02* (distance-400);
    } else {
        return 25;
    };
};