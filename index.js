// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
  return Math.abs(pickup - 42)
}

function distanceFromHqInFeet(pickup) {
  if (pickup > 42) {
    return distanceFromHqInBlocks(pickup) * 264
  } else {
    return Math.abs(distanceFromHqInBlocks(pickup)) * 264
  }
}

function distanceTravelledInFeet(pickup, dropoff) {
  return Math.abs(dropoff - pickup) * 264
}

function calculatesFarePrice(pickup, dropoff) {
  const distance = distanceTravelledInFeet(pickup, dropoff);

  if (distance < 400) {
    return 0;
  } else if (distance > 2500) {
      return'cannot travel that far';
  } else if (distance > 2000 && distance < 2500) {
      return 25;
  } else if (distance > 400 && distance < 2000) {
      return .02 * distance;
  }
}
