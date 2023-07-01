// Code your solution in this file!

function distanceFromHqInBlocks(block) {
  return Math.abs(block - 42); 
}

function distanceFromHqInFeet(block) {
  return 264 * distanceFromHqInBlocks(block); 
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
  return 264 * Math.abs(startingBlock - endingBlock);
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination); 

  if (distance <= 400) {
    return 0;
  } else if (distance < 2000) {
      return 0.02 * (distance - 400);
  } else if (distance < 2500) {
    return 25.00;
  } else {
    return "cannot travel that far";
  }
}
