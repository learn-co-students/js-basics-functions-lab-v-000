// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return distanceTravelledInBlocks(42, block);
}

function distanceFromHqInFeet(block) {
  return distanceTravelledInFeet(42, block);
}

function distanceTravelledInFeet(block1, block2) {
  return distanceTravelledInBlocks(block1, block2) * 264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance < 400) {
    return 0;
  } else if (distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far"
  }
}

function distanceTravelledInBlocks(block1, block2) {
  return Math.abs(block2 - block1);
}
