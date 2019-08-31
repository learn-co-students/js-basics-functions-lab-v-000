// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
    
    let headquarter = 42; 
    let distance; 

    if (blocks > headquarter) {
        distance = blocks - headquarter;
    } else if (blocks <= headquarter) {
        distance = headquarter - blocks;
    }
    return distance;
}

function distanceFromHqInFeet(blocks) {
    let feet = distanceFromHqInBlocks(blocks) * 264;
    return feet
}


function distanceTravelledInFeet(spot1, spot2) {
    
    let distance;
    
    if (spot1 > spot2) {
        distance = (spot1 - spot2) * 264;
    } else if (spot1 <= spot2) {
        distance = (spot2 - spot1) * 264;
    }
    return distance;
}

function calculatesFarePrice(start, destination) {

    let feet = distanceTravelledInFeet(start, destination);
    let fare;

    if (feet < 400) {
        fare = 0;
    } else if (feet < 2000 && feet > 400) {
        fare = (feet - 400) * 0.02;
    } else if (feet > 2000 && feet < 2500) {
        fare = 25;
    } else if (feet > 2500) {
        fare = 'cannot travel that far';
    }
    return fare
}