// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return Math.abs(42 - block);
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264;
}

function calculatesFarePrice(start, end) {
  const distance = distanceTravelledInFeet(start, end);
  if (distance >= 2500) {
    return 'cannot travel that far';
  } else if (distance >= 2000) {
    return 25;
  } else if (distance >= 400) {
    return distance * .02;
  } else {
    return 0;
  }
}
