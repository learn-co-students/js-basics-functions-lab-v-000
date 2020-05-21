// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  if (block >= 42) {
    return block - 42;
  } else if (block < 42) {
    return 42 - block;
  }
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(A,B) {
  if (B >= A) {
    return (B - A) * 264;
  } else {
    return (A - B) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
      return 0;
  } else if (distance > 400 && distance < 2000 ) {
    return (distance - 400) * .02
  } else if (distance >= 2000 && distance < 2500) {
    return 25;
  } else if (distance >= 2500) {
    return 'cannot travel that far';
  }
}
