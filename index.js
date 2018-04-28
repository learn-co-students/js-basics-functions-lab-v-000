function distanceFromHqInBlocks(passenger) {
  const hq = 42
  let blockDistance = hq - passenger
  return Math.abs(blockDistance)
}

function distanceFromHqInFeet(passenger) {
  const block = 264
  feetDistance = distanceFromHqInBlocks(passenger) * block
  return feetDistance
}

function distanceTravelledInFeet(locationA, locationB) {
  let blocks = Math.abs(locationA - locationB)
  const feetPerBlock = 264
  let feet = blocks * feetPerBlock
  return feet
}

function calculatesFarePrice(start, destination) {
  const trip = distanceTravelledInFeet(start, destination)
  if (trip < 400) {
    return 0
  }
  else if (trip > 400 && trip < 2000){
    cost = (trip - 400) * .02
    return cost
  }
  else if (trip > 2000 && trip < 2500) {
    return 25
  }
  else {
    return 'cannot travel that far'
  }
}
