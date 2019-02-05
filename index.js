// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return Math.abs(42 - block);
}

function distanceFromHqInFeet(block) {
  return 264 * distanceFromHqInBlocks(block);
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
  return Math.abs(startingBlock - endingBlock) * 264;
}

function calculatesFarePrice(startingBlock, endingBlock) {
  let distance = distanceTravelledInFeet(startingBlock,endingBlock);
  if (distance > 2500) {
    return 'cannot travel that far';
  } else if (distance > 2000) {
    return 25;
  } else if (distance > 400) {
    return .02 * (distance - 400);
  } else {
    return 0;
  }
}