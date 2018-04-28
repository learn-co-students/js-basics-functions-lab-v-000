function distanceFromHqInBlocks(block) {
  if (block >= 42) {
    return block - 42;
  } else {
    return 42 - block;
  }
}

function distanceFromHqInFeet(block) {
  // one block is 264 feet
  blocks = distanceFromHqInBlocks(block);
  return blocks * 264;
}

function distanceTravelledInFeet(block1, block2) {
  let result
  block1 >= block2 ? result = (block1 - block2) * 264 : result = (block2 - block1) * 264
  return result;
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance < 400) {
    return 0;
  } else if (distance >= 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else if (distance > 2500) {
    return 'cannot travel that far';
  }
}
