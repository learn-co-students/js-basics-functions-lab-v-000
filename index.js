// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  return Math.abs(location - 42);
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
  return Math.abs(startingBlock - endingBlock) * 264;
}

function calculatesFarePrice(startingBlock, endingBlock) {
  const distance = distanceTravelledInFeet(startingBlock, endingBlock)
  let cost;

  if (distance <= 400) {
    cost = 0;
  } else if (distance > 400 && distance <= 2000) {
    cost = (distance - 400) * .02;
  } else if (distance > 2000 && distance <= 2500) {
    cost = 25;
  } else {
    return "cannot travel that far";
  }
  return cost;
}
