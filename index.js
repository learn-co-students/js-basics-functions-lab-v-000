// Code your solution in this file!
function distanceFromHqInBlocks (block) {
  return Math.abs(block-42)
}

function distanceFromHqInFeet (block) {
  return distanceFromHqInBlocks(block)*264
}

function distanceTravelledInFeet (block1, block2) {
  return Math.abs(block1-block2)*264
}

function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination) < 400) {
    return 0;
  }
  else if (distanceTravelledInFeet(start, destination) < 2000) {
    return ((distanceTravelledInFeet(start, destination))-400)*0.02;
  }
  else if (distanceTravelledInFeet(start, destination) < 2500) {
    return 25;
  }
  else {
    return 'cannot travel that far';
  }
}