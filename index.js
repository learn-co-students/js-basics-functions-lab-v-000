function distanceFromHqInBlocks(blockNumber) {
  if (blockNumber > 42) {
    result = blockNumber - 42
  }
  else if (blockNumber < 42) {
    result = 42 - blockNumber
  }
  return result
}

function distanceFromHqInFeet(blockNumber) {
  feetNumber = distanceFromHqInBlocks(blockNumber) * 264
  return feetNumber
}

function distanceTravelledInFeet(start, destination) {
  feetDistance = Math.abs(start - destination) * 264
  return feetDistance
}

function calculatesFarePrice(start, destination) {
  feetDistance = distanceTravelledInFeet(start, destination)
  
  if (feetDistance <= 400) {
    price = 0
  }
  else if (feetDistance > 400 && feetDistance <= 2000) {
    price = (feetDistance - 400) * .02
  }
  
  else if (feetDistance > 2000 && feetDistance < 2500) {
    price = 25
  }
  
  else if (feetDistance >= 2500) {
    price = 'cannot travel that far'
  }
  
  return price
}