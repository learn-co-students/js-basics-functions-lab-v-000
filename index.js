// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  if (distance > 42) {
    return distance - 42
  }
  else {
    return 42 - distance
  }
}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet(block1, block2) {
  const blockAmount = Math.abs(block1 - block2)
    return blockAmount * 264
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance >= 2500) {
    return 'cannot travel that far'
  }
  else if (distance >= 400 && distance <= 2000) {
    return distance * .02
  }
  else if (distance >= 2000 && distance <= 2500) {
    return 25
  }
  else {
    return 0
  }
}
