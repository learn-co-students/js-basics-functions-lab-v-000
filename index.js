function distanceFromHqInBlocks(pickupLocation) {
  if (pickupLocation > 42) {
    return pickupLocation - 42;
  }
  else {
    return 42 - pickupLocation;
  }
}

function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * 264;
}

function distanceTravelledInFeet(pickupLocation, destination) {
  if (destination > pickupLocation) {
    return ((destination - pickupLocation) * 264);
  }
  if (destination < pickupLocation) {
    return ((pickupLocation - destination) * 264);
  }
}

function calculatesFarePrice(pickupLocation, destination) {
  if (distanceTravelledInFeet(pickupLocation, destination) > 2500) {
    return 'cannot travel that far';
  }
  if (distanceTravelledInFeet(pickupLocation, destination) > 2000) {
    return 25;
  }
  if (distanceTravelledInFeet(pickupLocation, destination) <= 400) {
    return 0;
  }
  else {
    return (distanceTravelledInFeet(pickupLocation, destination) - 400) * .02;
  }
}
