function distanceFromHqInBlocks(blockDistance) {
  if (blockDistance < 42) {
    return 42 - blockDistance;
  } else {
    return blockDistance - 42;
  }
}

function distanceFromHqInFeet(blockDistance) {
  return distanceFromHqInBlocks(blockDistance) * 264;
}

function distanceTravelledInFeet(start, finish) {
  if (start < finish) {
    return (finish - start) * 264;
  } else {
    return (start - finish) * 264;
  }
}

function calculatesFarePrice(start, finish) {
  const distance = distanceTravelledInFeet(start, finish);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return 0.02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}