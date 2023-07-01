// Code your solution in this file!
function distanceFromHqInBlocks(blockD) {
  if (blockD > 42) {
    return blockD - 42;
  } else {
    return 42 - blockD;
  }
}

function distanceFromHqInFeet(beginning) {
   const difference = distanceFromHqInBlocks(beginning)
   return difference * 264
}

function distanceTravelledInFeet(startBlock, endBlock) {
  if(startBlock > endBlock) {
    const difference = startBlock - endBlock
    return difference * 264
  } else {
    const difference = endBlock - startBlock
    return difference * 264
  }
}

function calculatesFarePrice(startBlock, endBlock) {
  const distanceFeet = distanceTravelledInFeet(startBlock, endBlock);
  if(distanceFeet < 400) {
    return 0;
  } else if(distanceFeet < 2000) {
    return distanceFeet * .02;
  } else if(distanceFeet < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
