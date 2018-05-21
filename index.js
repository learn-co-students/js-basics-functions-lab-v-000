// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  let result = block - 42
  if (result < 0) {
    result = -result
  }
  return result
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(blockOne, blockTwo) {
  let result
  if (blockOne > blockTwo) {
    result = (blockOne - blockTwo)*264
  } else {
    result = (blockTwo - blockOne)*264
  }
  return result
}

function calculatesFarePrice(start, destination) {
  feet = distanceTravelledInFeet(start, destination
  switch (feet) {
    case
  }
}
