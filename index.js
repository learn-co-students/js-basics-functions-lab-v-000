// Returns the number of blocks from Scuber's headquarters to the pickup location.
function distanceFromHqInBlocks(blockNumber) {
  let distanceInBlocks;
  blockNumber > 42 ? distanceInBlocks = blockNumber - 42 : distanceInBlocks = 42 -blockNumber;
  return distanceInBlocks;
}

// Returns the number of blocks from Scuber's headquarters to the pickup location.
function distanceFromHqInFeet(blockNumber) {
  let distanceInFeet;
  let distanceInBlocks = distanceFromHqInBlocks(blockNumber);
  distanceInFeet = distanceInBlocks * 264;
  return distanceInFeet;
}

// Calculates the number of feet a passenger travels given a starting block and an ending block.
function distanceTravelledInFeet(source, destination) {
  let distanceInFeet;
  let blocksTravelled;
  destination > source ? blocksTravelled = destination - source : blocksTravelled = source - destination;
  distanceInFeet = blocksTravelled * 264;
  return distanceInFeet;
}

// Given the same starting and ending block, return the fare for the customer.
function calculatesFarePrice(start, destination) {
  let distanceInFeet;
  let calculatedPrice;
  let message;
  distanceInFeet = distanceTravelledInFeet(start, destination);
  if (distanceInFeet <= 400) {
    calculatedPrice = 0;
    return calculatedPrice;
  } else if (distanceInFeet > 400 && distanceInFeet < 2000) {
    calculatedPrice = distanceInFeet * 0.02;
    return calculatedPrice;
  } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
    calculatedPrice = 25;
    return calculatedPrice;
  } else {
    calculatedPrice = null;
    message = 'cannot travel that far';
    return message;
  }
}
