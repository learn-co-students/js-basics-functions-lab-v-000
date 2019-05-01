// Code your solution in this file!

function distanceFromHqInBlocks(destination) {
  return Math.abs(destination - 42)
}

function distanceFromHqInFeet(destination) {
  return distanceFromHqInBlocks(destination) * 264
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
  return Math.abs(endingBlock - startingBlock) * 264
}

function calculatesFarePrice(startingBlock, endingBlock) {
  let distance = distanceTravelledInFeet(startingBlock, endingBlock)

  if (distance < 399) {
    return 0
  } else if (distance > 400 && distance < 1999) {
    return (distance - 400) * .02
  } else if (distance > 2000 && distance < 2499) {
    return 25
  } else
    return "cannot travel that far"
  }
