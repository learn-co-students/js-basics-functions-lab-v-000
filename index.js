let hq = 42;

function distanceFromHqInBlocks(block) {
  return Math.abs(hq - block);
}

function distanceFromHqInFeet(value) {
  return distanceFromHqInBlocks(value) * 264;
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264;
}

function calculatesFarePrice(start, end) {
  let distance = distanceTravelledInFeet(start, end);
  if (distance < 400) {
    return 0;
  } else if (distance < 2000) {
    return (distance - 400) * .02;
  } else if (distance > 2500) {
    return 'cannot travel that far';
  } else if (distance > 2000) {
    return 25;
  }
}
calculatesFarePrice(34, 10)
