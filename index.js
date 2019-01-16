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

  if (distance < 400) {
    return 0;
  } else if (distance <= 2000 && distance >= 400) {
    return (distance - 400) * .02;
  } else if (distance <= 2500 && distance > 2000) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}

// Learn.co solution below. Is Math.abs() inappropriate? Passes.

// function distanceFromHqInBlocks (blockNumber) {
//   if (blockNumber > 42) {
//     return blockNumber - 42;
//   } else {
//     return 42 - blockNumber;
//   }
// }
