function distanceFromHqInBlocks (street) {
  if (street > 42) {
    return street - 42;
  } else {
    return 42 - street;
  }
}

function distanceFromHqInFeet (street) {
  return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet (street1, street2) {
  if (street1 > street2) {
    return ((street1 - street2) * 264);
  } else {
    return ((street2 - street1) * 264);
  }
}

function calculatesFarePrice (startBlock, endBlock) {
  const distance = distanceTravelledInFeet(startBlock, endBlock);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance < 2000) {
    return 0.02 * distance;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else if (distance > 2500) {
    return 'cannot travel that far';
  }
}
