// Code your solution in this file!

function blocksBetween(block1, block2) {
  return Math.abs(block1 - block2);
}

function blocksToFeet(blocks) {
  return blocks * 264;
}

function distanceFromHqInBlocks(street) {
  return blocksBetween(42, street);
}

function distanceFromHqInFeet(street) {
  return blocksToFeet(distanceFromHqInBlocks(street));
}

function distanceTravelledInFeet(block1, block2) {
  return blocksToFeet(blocksBetween(block1, block2));
}

function calculatesFarePrice(start, destination) {
  const distance = blocksToFeet(blocksBetween(start, destination));

  if (distance < 400) {
    return 0;
  } else if (distance < 2000) {
    return distance * 0.02;
  } else if (distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
