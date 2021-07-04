// Code your solution in this file!

function distanceFromHqInBlocks(location) {
  switch(location) {
    case 43:
      return 1;
      break;
    case 50:
      return 8;
      break;
    case 34:
      return 8;
      break;
  }
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
  return Math.abs(endingBlock - startingBlock) * 264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance < 400) {
    return 0;
  } else if (distance < 2000) {
    return distance * 0.02;
  } else if (distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
