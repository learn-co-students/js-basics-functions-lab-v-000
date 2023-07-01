function distanceFromHqInBlocks(block) {
  if (block > 42) {
    return block - 42;
  } else {
    return 42 - block;
  }
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  if (startBlock < endBlock) {
    return (endBlock - startBlock) * 264;
  }
  else {
    return (startBlock - endBlock) * 264;
  }
}

function calculatesFarePrice(start, destination){
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400){
    return 0;
  } else if (distance <= 2000) {
    return distance * 0.02;
  } else if (distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }

}