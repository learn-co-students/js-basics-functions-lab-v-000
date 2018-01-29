function distanceFromHqInBlocks (end) {
  return Math.abs(end - 42);
}

function distanceFromHqInFeet(end) {
  return distanceFromHqInBlocks(end) * 264;
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(end - start) * 264;
}

function calculatesFarePrice(start, end) {
  if (distanceTravelledInFeet(start, end) <= 400) {
    return 0;
  } else if (distanceTravelledInFeet(start, end) > 400 && distanceTravelledInFeet(start, end) <= 2000) {
    return distanceTravelledInFeet(start, end) * 0.02;
  } else if (distanceTravelledInFeet(start, end) > 2000 && distanceTravelledInFeet(start, end) <= 2500) {
    return 25;
  } else if (distanceTravelledInFeet(start, end) >= 2500) {
    return 'cannot travel that far';
  }
}
