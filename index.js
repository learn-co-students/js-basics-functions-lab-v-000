function distanceFromHqInBlocks (someValue) {
  if (someValue > 42) {
    return someValue - 42;
  } else {
    return 42 - someValue;
  }
}

function distanceFromHqInFeet (someValue) {
  let distanceFeet = distanceFromHqInBlocks (someValue);
  return distanceFeet * 264;
}

function distanceTravelledInFeet (startBlock, endBlock) {
  if (startBlock > endBlock) {
    return (startBlock - endBlock) * 264;
  } else {
    return (endBlock - startBlock) * 264;
  }
}

function calculatesFarePrice (startBlock, endBlock) {
  let distanceFeet = distanceTravelledInFeet (startBlock, endBlock);
  if (distanceFeet <= 400) {
    return 0;
  } else if (distanceFeet > 2500) {
    return 'cannot travel that far';
  } else if (distanceFeet < 2000 && distanceFeet > 400) {
    return (distanceFeet - 400) * .02;
  } else if (distanceFeet > 2000 && distanceFeet < 2500) {
    return 25;
  }
}
