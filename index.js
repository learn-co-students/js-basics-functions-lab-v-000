// Code your solution in this file!
const hq = 42;

function distanceFromHqInBlocks(blocks) {
  if (hq > blocks) {
    return hq - blocks;
  } else {
    return blocks - hq;
  }
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
  if (startingBlock > endingBlock) {
    return (startingBlock - endingBlock) * 264;
  } else {
    return (endingBlock - startingBlock) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance > 2500) {
    return 'cannot travel that far';
  } else if (distance > 2000) {
    return 25;
  } else if (distance > 400) {
    return (distance - 400) * 0.02;
  } else {
    return 0;
  }
}