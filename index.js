// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  if (blocks > 42) {
    return blocks - 42;
  } else {
    return 42 - blocks;
  }
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
  if (endingBlock > startingBlock) {
  return (endingBlock - startingBlock) * 264;
} else {
  return (startingBlock - endingBlock) * 264;
 }
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination)

  if (distance <= 400) {
  return 0;
} else if (400 < distance && distance <= 2000) {
  return distance * .02;
} else if (2000 < distance && distance < 2500) {
  return 25;
} else {
  return "cannot travel that far";
  }
}
