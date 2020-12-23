// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  return (42 > blocks) ? 42 - blocks : blocks - 42
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264
}

function distanceTravelledInFeet(startBlock, endBlock) {
  let blockDiff = startBlock - endBlock
  return Math.abs(blockDiff) * 264
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination)
  
  if (distance < 400) {
    return 0
  } else if (distance > 400 && distance < 2000) {
    return (distance - 400) * 0.02
  } else if (distance > 2500) {
    return 'cannot travel that far'
  } else if (distance > 2000) {
    return 25
  }
}