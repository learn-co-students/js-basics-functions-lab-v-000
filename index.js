function distanceFromHqInBlocks (street) {
  const hq = 42;
  if (street > hq) {
    return street - hq;
  } else {
    return hq - street;
  }
}

function distanceFromHqInFeet (street) {
  const distance = distanceFromHqInBlocks(street) * 264;
  return distance;
}

function distanceTravelledInFeet (street1, street2) {
  if (street1 > street2) {
    const distance = ((street1 - street2) * 264);
    return distance;
  } else {
    const distance = ((street2 - street1) * 264);
    return distance;
  }
}

function calculatesFarePrice (startBlock, endBlock) {
  const distance = distanceTravelledInFeet(startBlock, endBlock);
  if (distance <= 400) {
    const fare = 0;
    return fare;
  } else if (distance > 400 && distance < 2000) {
    const fare = 0.02 * distance;
    return fare;
  } else if (distance > 2000 && distance < 2500) {
    const fare = 25;
    return fare;
  } else if (distance > 2500) {
    return 'cannot travel that far';
  }
}
