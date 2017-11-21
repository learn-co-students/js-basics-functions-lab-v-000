// Code your solution in this file!
function  distanceFromHqInBlocks(blockNumber) {
  if (blockNumber > 42) {
    return blockNumber - 42;
  } else {
    return 42 -blockNumber;
  }
}

function distanceFromHqInFeet(blockNumber) {
  return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet(startStreet, currentStreet) {
  if (startStreet > currentStreet) {
    return (startStreet - currentStreet) * 264;
  } else {
    return (currentStreet - startStreet) * 264;
  }
}

function calculatesFarePrice (start, destination) {
  let distanceTr = distanceTravelledInFeet(start, destination);
  if (distanceTr <= 400) {
    return 0;
  } else if (distanceTr <= 2000) {
    return distanceTr * .02
  } else if (distanceTr <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far'
  }

  }
