// Code your solution in this file!

function distanceFromHqInBlocks (pickupBlock) {
  if (pickupBlock > 42) {
    return pickupBlock - 42;
  } else {
    return 42 - pickupBlock;
  }
}

function distanceFromHqInFeet (pickupBlock) {
  return distanceFromHqInBlocks(pickupBlock) * 264;
}

function distanceTravelledInFeet (startBlock, endBlock) {
  if (startBlock > endBlock) {
    return (startBlock - endBlock) * 264;
  } else {
    return (endBlock - startBlock) * 264;
  }
}

function calculatesFarePrice (startBlock, endBlock) {
  const dist = distanceTravelledInFeet(startBlock, endBlock);
  if (dist <= 400) {
    return 0;
  } else if (dist > 400 && dist <= 2000) {
    return (dist - 400) * .02 ;
  } else if (dist > 2000 && dist <= 2500 ) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
