// Code your solution in this file!
function distanceFromHqInBlocks(distanceInBlocks) {
  return distanceInBlocks > 42 ? (distanceInBlocks - 42) : (42 - distanceInBlocks)
}

function distanceFromHqInFeet(distanceInBlocks) {
  return distanceFromHqInBlocks(distanceInBlocks) * 264
}

function distanceTravelledInFeet(startBlock, endBlock) {
  return startBlock > endBlock ? (startBlock - endBlock) * 264 : (endBlock - startBlock) * 264
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance < 400) {
    return 0;
  }
  else if (distance > 400 && distance < 2000) {
    return (distance - 400) * 0.02;
  }
  else if (distance > 2000 && distance < 2500) {
    return 25;
  }
  else if (distance > 2500){
    return 'cannot travel that far';
  }
}
