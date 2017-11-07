// Code your solution in this file!
function distanceFromHqInBlocks (block) {
  if (block > 42) {
    return block - 42;
  } else {
    return 42 - block
  }
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks (block) * 264;
}


function distanceTravelledInFeet(startBlock, endBlock) {
  if (startBlock < endBlock) {
    return (endBlock - startBlock) * 264
  } else {
    return (startBlock - endBlock) * 264
  }
}

function calculatesFarePrice(start, destination) {

  const distance = distanceTravelledInFeet(start, destination);
  if (distance < 400) {
    return 0;
  } else if (400 < distance && distance <= 2000) {
    return .02 * distance;
  } else if (2000 <= distance && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
