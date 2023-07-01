// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  if (block >= 42) {
    return block - 42;
  } else {
    return 42 - block;
  }
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(a, b) {
  if (a > b) {
    return (a - b) * 264
  } else {
    return (b - a) * 264
  }
}

function calculatesFarePrice(a, b) {
  let distance = distanceTravelledInFeet(a, b);

  if (distance < 400) {
    return 0;
  } else if (distance >= 400 && distance <= 2000) {
    return parseFloat(((distance * 0.02) - (400 * 0.02)).toFixed(2))
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
