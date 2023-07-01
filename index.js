// Code your solution in this file!
const hq = 42
const block_feet = 264

function distanceFromHqInBlocks(block) {
  return Math.abs(block - hq)
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * block_feet
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(end - start) * block_feet
}

function calculatesFarePrice(start, destination) {
  const d = distanceTravelledInFeet(start, destination)
  if (d <= 400) {
    return 0
  } else if (400 < d && d <= 2000) {
    return d * 0.02
  } else if (2000< d && d <= 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}
