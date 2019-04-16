// Code your solution in this file!
function distanceFromHqInBlocks(destination) {
  if (destination > 42) {
    return (destination - 42);
  } else {
    return (42 - destination);
  }
}

function distanceFromHqInFeet(destination) {
  return (distanceFromHqInBlocks(destination) * 264);
}

function distanceTravelledInFeet(startBlock, endBlock) {
  if (startBlock < endBlock) {
    return ((endBlock - startBlock) * 264);
  } else {
    return ((startBlock - endBlock) * 264);
  }
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return ((distance - 400) * 0.02);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
