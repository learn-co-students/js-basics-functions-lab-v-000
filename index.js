// Code your solution in this file!
function distanceFromHqInBlocks (destinationBlock) {
  if (destinationBlock > 42) {
    return destinationBlock - 42;
  } else {
    return 42 - destinationBlock;
  }
}

function distanceFromHqInFeet (destinationBlock) {
  return distanceFromHqInBlocks(destinationBlock) * 264;
}

function distanceTravelledInFeet (startBlock, destinationBlock) {
  if (destinationBlock > startBlock) {
    return (destinationBlock - startBlock) * 264;
  } else {
    return (startBlock - destinationBlock) * 264;
  }
}

function calculatesFarePrice (startBlock, destinationBlock) {
  const distance = distanceTravelledInFeet(startBlock, destinationBlock);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance < 2000) {
    return (distance - 400) * .02;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
