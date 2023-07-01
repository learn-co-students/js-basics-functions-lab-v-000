function distanceFromHqInBlocks(block) {
  const hQ = 42
  return Math.abs(hQ-block)
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block)*264
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start-end)*264
}

function calculatesFarePrice(start, end) {
  const distance = distanceTravelledInFeet(start, end)
  if (distance <= 400) {
    return 0
  } else if (distance > 400 && distance < 2000) {
    let rate = .02
    return rate*distance
  } else if (distance > 2000 && distance <= 2500) {
    return 25
  } else if (distance > 2500) {
    return 'cannot travel that far'
  }
}
