// Code your solution in this file!
function distanceFromHqInBlocks (destination) {
  return Math.abs(destination - 42);
}

function distanceFromHqInFeet (blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(first, second) {
  return Math.abs(second - first ) * 264;
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance <= 264 ) {
    return 0;
  } else if (distance > 264 && distance < 2000 ) {
    return (distance * .02);
  } else if (distance > 2000 && distance < 2500 ) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
