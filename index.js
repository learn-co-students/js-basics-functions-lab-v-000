// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
  distance = Math.abs(42-pickupLocation);

  return distance;
}

function distanceFromHqInFeet(pickupLocation) {
  distance = Math.abs((42-pickupLocation)*264);

  return distance;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  distance = Math.abs((startBlock - endBlock)*264);

  return distance;
}

function calculatesFarePrice(startBlock, endBlock) {
  distance = Math.abs((startBlock - endBlock)*264);

  if (distance > 400 && distance <2000) {
    fare = distance * 0.02;
    return fare;
  }
  else if (distance > 2000 && distance < 2500) {
    fare = 25;
    return fare;
  }
  else if (distance <= 400) {
    fare = 0;
    return fare;
  }
  else if (distance > 2500) {
    return 'cannot travel that far';
  }
}
