// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  if (street > 42) {
    return street - 42
  } else if (street < 42) {
    return 42 - street
  }
}

function distanceFromHqInFeet(feet) {
  return distanceFromHqInBlocks(feet) * 264
}

function distanceTravelledInFeet(start, end) {
  if (end > start) {
    return (end - start) * 264
  } else if (end < start) {
    return (start - end) * 264
  }
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination)
  if (distance <= 400) {
    return 0
  } else if (distance > 400 && distance < 2000) {
    return distance * .02
  } else if (distance > 2000 && distance < 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}
