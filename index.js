// Code your solution in this file!
function distanceFromHqInBlocks (pickupLocation) {
  if (pickupLocation >= 42) {
    return pickupLocation - 42;
  } else {
    return 42 - pickupLocation;
  }
}

function distanceFromHqInFeet (pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * 264;
}

function distanceTravelledInFeet (start, destination) {
  if (destination > start) {
    return (destination - start) * 264;
  } else {
    return (start - destination) * 264;
  }
}

function calculatesFarePrice (start, destination) {
  const feetTravelled = distanceTravelledInFeet(start, destination);
  if (feetTravelled <= 400) {
    return 0;
  } else if (feetTravelled <= 2000) {
    return (feetTravelled - 400) * 0.02;
  } else if (feetTravelled < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
