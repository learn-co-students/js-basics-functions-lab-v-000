// Code your solution in this file!
const hqBlock = 42;
let startPoint;
let fristTrip;
let secondTrip;


function distanceFromHqInBlocks(startPoint) {
  if (startPoint > hqBlock) {
    return startPoint - hqBlock;
  } else {
    return hqBlock - startPoint;
  }
}

function distanceFromHqInFeet(startPoint) {
  return distanceFromHqInBlocks(startPoint) * 264;
}

function distanceTravelledInFeet(beginning, ending) {
  if (beginning < ending) {
    return (ending - beginning) * 264;
  } else {
    return (beginning - ending) * 264;
  }
}

function calculatesFarePrice(beginning, ending) {
  const distance = distanceTravelledInFeet(beginning, ending);

  if (distance <= 400) {
    return 0;
  } else if ( 400 < distance && distance <= 2000 ) {
    return distance * 0.02;
  } else if ( distance > 2000 && distance < 2500 ) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
