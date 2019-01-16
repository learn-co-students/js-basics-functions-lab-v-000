// Code your solution in this file!

let hqBlock = 42;

function distanceFromHqInBlocks(block) {
  return Math.abs(block - hqBlock);
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs((destination - start) * 264);
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination)
  let farePrice

  if (distance < 400) {
    return farePrice = 0;
  } else if (distance <= 2000 && distance >= 400) {
    return farePrice = (distance - 400) * .02;
  } else if (distance <= 2500 && distance > 2000) {
    return farePrice = 25;
  } else if (distance > 2500) {
    return 'cannot travel that far';
  }
}
