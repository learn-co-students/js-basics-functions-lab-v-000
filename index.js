// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  let hq = 42;
  if (block > hq) {
    return block - 42;
  } else if (block < hq) {
    return 42 - block;
  }
}

function distanceFromHqInFeet(block) {
  const num = 264;
  return distanceFromHqInBlocks(block) * num;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264
}

function calculatesFarePrice(start, destination) {
  let fare;
  let distance = distanceTravelledInFeet(start, destination);
  if (distance < 400) {
    return fare = 0;
  } else if (distance >= 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}