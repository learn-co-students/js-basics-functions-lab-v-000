// Code your solution in this file!
// HQ is 42nd
function distanceFromHqInBlocks(distance){
    let blocks;
    if (distance >= 42 ){
        blocks = distance - 42;
    } else {
        blocks = 42 - distance;
    }
    return blocks;
}

function distanceFromHqInFeet(blockNumber){
    let distanceInFeet;
    distanceInFeet = distanceFromHqInBlocks(blockNumber) * 264;
    return distanceInFeet;
}

function distanceTravelledInFeet(start, end){
    let distanceTravelled;
    if (end > start){
        distanceTravelled = (end - start) * 264;
    } else {
        distanceTravelled = (start - end) * 264;
    }
     return distanceTravelled
}

function calculatesFarePrice(start, destination){
    let price;
    let distance = distanceTravelledInFeet(start, destination);

     if (distance < 2000 && distance >= 400){
         price = (distance - 400) * .02;

     } else if (distance > 2000 && distance < 2500){
         price = 25;

     } else if (distance < 400){
         price = 0;

     } else if (distance > 2500){
         price = "cannot travel that far"

     }
     return price;
}
