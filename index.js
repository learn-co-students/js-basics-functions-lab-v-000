// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  if (distance >= 42) {
    return distance - 42;
  } else {
    return 42 - distance;
  }
}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet(block1, block2) {
  let blocks = Math.max(block1, block2) - Math.min(block1, block2);
  return 264 * blocks;
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance > 400 && distance < 2000) {
    return 0.02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else if (distance < 400) {
    return 0;
  } else {
    return 'cannot travel that far';
  }
}
