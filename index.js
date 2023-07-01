// Code your solution in this file!
function distanceFromHqInBlocks(number) {
  return (number >= 42) ? number - 42: 42 - number;
}

function distanceFromHqInFeet(number) {
  return (distanceFromHqInBlocks(number) * 264);
}

function distanceTravelledInFeet(startBlock, endBlock) {
  (endBlock > startBlock) ? (distance = endBlock - startBlock ):
    (distance = startBlock - endBlock)
  return (distance * 264)
}

function calculatesFarePrice (startBlock, endBlock) {
  const distance = distanceTravelledInFeet(startBlock, endBlock);
  let cost
  if (distance <= 400) {
    cost = 0;
  } else if (distance > 400 && distance <= 2000) {
    cost = (distance * 0.02);
  } else if (distance > 2000 && distance <= 2500) {
    cost = 25;
  } else {
    cost = 'cannot travel that far'
  }
  return cost
}
