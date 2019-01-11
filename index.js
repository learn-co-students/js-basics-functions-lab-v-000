function distanceFromHqInBlocks (destination) {
  let blocks;
  if (destination >= 42) {
    blocks = destination - 42
    return blocks
  } else {
    blocks = 42 - destination
    return blocks
  }
}

function distanceFromHqInFeet (destination) {
  let blocks = distanceFromHqInBlocks (destination);
  let feet = blocks * 264
  return feet
}

function distanceTravelledInFeet (start, destination) {
  if (destination >= start) {
    feet = (destination - start) * 264;
    return feet
  } else {
    feet = (start - destination) * 264;
    return feet
  }
}

function calculatesFarePrice (start, destination) {
  let feet = distanceTravelledInFeet (start, destination);
  if (feet <= 400) {
    fare = 0;
    return fare
  } else if (feet <= 2000) {
    fare = (feet - 400) * 0.02;
    return fare
  } else if (feet < 2500) {
    fare = 25;
    return fare
  } else {
    return 'cannot travel that far'
  }
}
