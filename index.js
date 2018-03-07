// Code your solution in this file!

function distanceFromHqInBlocks(distance) {
  if (distance >= 42) {
    return distance - 42;
  } else {
    return 42 - distance;
  }
}

function distanceFromHqInFeet(distance) {
  const blocks = distanceFromHqInBlocks(distance);
  return blocks * 264;
}

function distanceTravelledInFeet(start, end) {
  let blocks;
  if (start > end) {
    blocks = start - end;
  } else {
    blocks = end - start;
  }
  return blocks * 264;
}

function calculatesFarePrice(start, end) {
  const distance = distanceTravelledInFeet(start, end);
  if (distance < 400) {
    return 0
  } else if (distance >= 400 && distance <= 2000) {
    return distance * 0.02;
  } else if (distance >= 2000 && distance <= 2500) {
    return 25;
  } else if (distance > 2500) {
    return 'cannot travel that far';
  }
}
