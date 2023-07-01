const hqStreet = 42;
const blockLength = 264;
const freeDistance = 400;

function distanceFromHqInBlocks (location) {
  return Math.abs(location - hqStreet);
}

function distanceFromHqInFeet (location) {
  return distanceFromHqInBlocks(location) * blockLength;
}

function distanceTravelledInFeet (startBlock, endBlock) {
  return Math.abs((endBlock - startBlock) * blockLength);
}

function calculatesFarePrice (startBlock, endBlock) {
  const distance = distanceTravelledInFeet(startBlock, endBlock);
  if (distance <= freeDistance) {
    return 0;
  } else if (distance > freeDistance && distance <= 2000) {
    return (distance - freeDistance) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
