function distanceFromHqInBlocks(street_number) {
  return distanceInBlocks(street_number, 42);
}

function distanceFromHqInFeet(street_number) {
  return distanceFromHqInBlocks(street_number) * 264;
}

function distanceTravelledInFeet(start, end) {
  return distanceInBlocks(start, end) * 264;
}

function distanceInBlocks(start, end) {
  return Math.abs(start - end);
}

function calculatesFarePrice(start, end) {
  let distance = distanceInBlocks(start, end) * 264;
  return scuberPriceForFeet(distance);
}

function scuberPriceForFeet(distance) {
  if (distance < 400) {
    return 0;
  } else if (distance < 2000) {
    return distance * .02;
  } else if (distance > 2500) {
    return 'cannot travel that far';
  } else if (distance > 2000) {
    return 25;
  }
}
