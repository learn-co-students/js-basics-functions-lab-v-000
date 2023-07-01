function distanceFromHqInBlocks(blocks) {
  if (blocks > 42) {
    return blocks - 42;
  } else {
    return 42 - blocks;
  }
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  if (startBlock < endBlock) {
    return (endBlock - startBlock) * 264;
  } else {
    return (startBlock - endBlock) * 264;
  }
}

function calculatesFarePrice (start, destination) {
  const calculateDistance = distanceTravelledInFeet(start, destination);
  if (calculateDistance <= 400) {
    return 0;
  } else if (calculateDistance > 400 && calculateDistance < 2000) {
    return (calculateDistance / 100) * 2;
  } else if (calculateDistance >= 2000 && calculateDistance < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
