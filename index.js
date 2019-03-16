// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  let distanceBlock
  if (block > 42) {
    distanceBlock = block - 42;
  } else {
    distanceBlock = 42 - block;
  }
  return distanceBlock
}

function  distanceFromHqInFeet(block) {
  let distanceFeet = distanceFromHqInBlocks(block) * 264;
  return distanceFeet
}

function distanceTravelledInFeet(start, finish) {
  let distance
  if (start > finish) {
    distance = (start - finish) * 264;
  } else {
    distance = (finish - start) * 264;
  }
  return distance
}

function calculatesFarePrice(start, destination) {
  let price
  let distance = distanceTravelledInFeet(start, destination)
  if ( distance <= 400) {
    price = 0;
  } else if (distance > 400 && distance <= 2000) {
    price = (distance - 400) * 0.02;
  } else if (distance > 2000 && distance < 2500) {
    price = 25;
  } else {
    price = 'cannot travel that far';
  }
  return price
}
