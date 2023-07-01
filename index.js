// Code your solution in this file!

function distanceFromHqInBlocks(block) {
    if (block > 42) {
      return block - 42;
    } else {
      return 42 - block;
    }
}

function distanceFromHqInFeet (block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(start, finish) {
  if (start < finish) {
    return (finish - start) * 264;
  } else {
    return (start - finish) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance > 2500) {
    return 'cannot travel that far'
  } else if (distance > 2000) {
    return 25;
  } else if (distance > 400 && distance < 2000) {
    return distance * 0.02;
  } else {
    return 0;
  }
}
