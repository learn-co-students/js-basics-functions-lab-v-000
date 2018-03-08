// Code your solution in this file!
function distanceFromHqInBlocks (blockNumber) {
  if (blockNumber > 42) {
    return blockNumber - 42;
  } else {
    return 42 - blockNumber;
  }
}

function distanceFromHqInFeet(blockNumber) {
  return distanceFromHqInBlocks(blockNumber) * 264
}

function distanceTravelledInFeet(blockNumber, destination) {
  return Math.abs(blockNumber - destination) * 264
}

function calculatesFarePrice(start, destination) {
  let price = 0;
  let distanceTraveled = distanceTravelledInFeet(start, destination)
  if (distanceTraveled <= 400) {
    return price
  }
  else if (distanceTraveled <= 2000) {
    return distanceTraveled * 0.02
  }
  else if (distanceTraveled >= 2000 && distanceTraveled < 2500) {
    price = 25
    return price
  }
  else {
    return 'cannot travel that far'
  }
}
