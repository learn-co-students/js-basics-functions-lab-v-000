// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  const distance = block - 42;
  return distance < 0 ? distance * -1 : distance;
}

function distanceFromHqInFeet(block) {
  const blockDistance = distanceFromHqInBlocks(block);
  return blockDistance * 264;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  const blockDistance = startBlock - endBlock;
  const feetDistance = blockDistance * 264;
  return feetDistance < 0 ? feetDistance * -1 : feetDistance;
}

function calculatesFarePrice(startBlock, endBlock) {
  const feetDistance = distanceTravelledInFeet(startBlock, endBlock);
  const rate = feetDistance * 0.02;
  const maxRate = 25;

  if (feetDistance < 400) {
    return 0;
  }
  else if (feetDistance <= 2000) {
    return rate;
  }
  else if (feetDistance <= 2500) {
    return maxRate;
  }
  else {
    return "cannot travel that far";
  }
}
