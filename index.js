// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
  return Math.abs(blockNumber - 42);
}

function distanceFromHqInFeet(blockNumber) {
  return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet(block1, block2) {
  return Math.abs((block1 - block2) * 264);
}

function calculatesFarePrice(block1, block2) {
  const distance = distanceTravelledInFeet(block1, block2);

  if (distance > 2500) {
    return 'cannot travel that far';
  } else if (distance > 2000) {
    return 25;
  } else if (distance > 400) {
    return distance * 0.02;
  } else {
    return 0;
  }
}
