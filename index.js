// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
  if (streetNumber < 42) {
    return 42 - streetNumber
  } else if (streetNumber > 42) {
    return streetNumber - 42
  } else {
    return streetNumber
  }
}

function distanceFromHqInFeet(streetNumber) {
  return 264 * distanceFromHqInBlocks(streetNumber)
}

function distanceTravelledInFeet(start, end) {
  if (start < end) {
    return (end - start) * 264
} else if (start > end) {
  return (start - end) * 264
}
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination)

  if (distance <= 400) {
    return 0
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400)
  } else if (distance > 2000 && distance < 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}
