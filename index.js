// Code your solution in this file!
function distanceFromHqInBlocks(block1, block2 = 42) {
  return Math.abs(block2 - block1);
}

function distanceFromHqInFeet(block1, block2 = 42) {
  return distanceFromHqInBlocks(block1, block2) * 264;
}

function distanceTravelledInFeet(block1, block2) {
  return distanceFromHqInFeet(block1, block2);
}

function calculatesFarePrice(a, b) {
  let distance = distanceFromHqInFeet(a, b);
  switch (true) {
    case distance >= 400 && distance <= 2000:
      return (distance - 400) * 0.02;
    case distance > 2000 && distance <= 2500:
      return 25;
    case distance < 400:
      return 0;
    default:
      return 'cannot travel that far';
  }
}
