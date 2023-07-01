// Code your solution in this file!
function distanceInBlocks (blocks) {
  if (blocks <= 42) {
    return 42 - blocks;
  } else if (blocks > 42) {
    return blocks - 42;
  }
}

function distanceInFeet (blocks) {
  return distanceInBlocks(blocks) * 264;
}

function distanceFromHqInBlocks (blocks) {
  return distanceInBlocks(blocks);
}

function distanceFromHqInFeet (blocks) {
  return distanceInFeet(blocks);
}

function distanceTravelledInFeet (start, end) {
  if (end > start) {
    return (end - start) * 264;
  } else {
    return (start - end) * 264;
  }
}

function calculatesFarePrice (start, end) {
  if (distanceTravelledInFeet(start, end) < 400) {
    return 0;
  } else if (distanceTravelledInFeet(start, end) < 2000) {
    return (distanceTravelledInFeet(start, end) - 400) * .02;
  } else if (distanceTravelledInFeet(start, end) < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
