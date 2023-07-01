// Code your solution in this file!
function hqBlock() {
  return 42
}

function distanceFromHqInBlocks(block) {
  return Math.abs(block - hqBlock())
}

function feetPerBlock() {
  return 264
}

function distanceTravelledInFeet(a, b) {
  return Math.abs(a - b) * feetPerBlock()
}

function distanceFromHqInFeet(block) {
  return distanceTravelledInFeet(block, hqBlock())
}

function fare(distance) {
  if (distance <= 400) {
    return 0
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02
  } else if (distance > 2000 & distance <= 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}

function calculatesFarePrice(a, b) {
  const distance = distanceTravelledInFeet(a, b)
  return fare(distance)
}
