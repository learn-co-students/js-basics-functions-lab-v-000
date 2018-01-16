// Code your solution in this file!
function distanceFromHqInBlocks (blocks) {
  if (blocks < 42) {
    return 42 - blocks;
  } else {
    return blocks - 42;
  }
}

function distanceFromHqInFeet (blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet (start, end) {
  if (start > end) {
    return (start - end) * 264;
  } else {
    return (end - start) * 264;
  }
}

function calculatesFarePrice (start, end) {
  const distance = distanceTravelledInFeet(start, end);
  if (distance <= 400) {
    return 0;
  } else if ( 401 <= distance && distance <= 2000) {
    return .02 * distance;
  } else if ( 2001 <= distance && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
