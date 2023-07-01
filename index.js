// Code your solution in this file!

// each block is 264 feet long

function distanceFromHqInBlocks(pickup) {
  let blocks
  if (pickup <= 42) {
    blocks = 42 - pickup;
  }
  else {
    blocks = pickup - 42;
  }
  return blocks
}

function distanceFromHqInFeet(pickup) {
  let distanceInFeet = distanceFromHqInBlocks(pickup) * 264;
  return distanceInFeet
}

function distanceTravelledInFeet(start, end) {
  let blocksTravelled
  if (start <= end) {
    blocksTravelled = end - start;
  }
  else {
    blocksTravelled = start - end;
  }
  return blocksTravelled * 264
}

function calculatesFarePrice(start, end) {
  let result;
  let distance = distanceTravelledInFeet(start, end);
  if (distance <= 400) {
    result = 0;
  }
  else if (distance > 400 && distance <= 2000) {
    result = (distance - 400) * 0.02;
  }
  else if (distance > 2000 && distance <= 2500) {
    result = 25;
  }
  else {
    result = "cannot travel that far"
  }
  return result
}
