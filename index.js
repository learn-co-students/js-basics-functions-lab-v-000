// Code your solution in this file!
function distanceFromHqInBlocks (pickupLocation) {
  return Math.abs(42 - pickupLocation);
}

function distanceFromHqInFeet (pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * 264;
}

function distanceTravelledInFeet (beginningBlock, destinationBlock) {
  return Math.abs(destinationBlock - beginningBlock) * 264;
}

function calculatesFarePrice (beginningBlock, destinationBlock) {
  const distance = distanceTravelledInFeet(beginningBlock, destinationBlock);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return distance * .02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
