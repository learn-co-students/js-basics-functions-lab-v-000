function distanceFromHqInBlocks(pickUpLocation) {
  if (pickUpLocation > 42) {
    return pickUpLocation - 42;
  } else {
    return 42 - pickUpLocation;
  }
}

function distanceFromHqInFeet(pickuplocation) {
  return distanceFromHqInBlocks(pickuplocation) * 264;
}

function distanceTravelledInFeet(pickUpLocation, dropOffLocation) {
  if (pickUpLocation < dropOffLocation) {
    return (dropOffLocation - pickUpLocation) * 264;
  } else {
    return (pickUpLocation - dropOffLocation) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  const feetTraveled = distanceTravelledInFeet(start, destination)

  if (feetTraveled <= 400) {
    return 0;
  } else if (feetTraveled > 400 && feetTraveled <= 2000) {
    return feetTraveled * 0.02;
  } else if (feetTraveled > 2000 && feetTraveled < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}