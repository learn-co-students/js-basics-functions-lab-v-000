function distanceFromHqInBlocks (dest) {
  if (dest > 42) {
    return dest - 42
  } else {
    return 42 - dest
  }
}

function distanceFromHqInFeet (dest) {
  return distanceFromHqInBlocks(dest) * 264;
}

function distanceTravelledInFeet (start, finish) {
  if (start > finish) {
    return (start - finish) * 264
  } else {
    return (finish - start) * 264
  }
}

function calculatesFarePrice (start, finish) {
  const distance = distanceTravelledInFeet(start, finish)

  if (distance <= 400) {
    return 0
  } else if (distance > 2500) {
    return 'cannot travel that far'
  } else if (distance > 400 && distance <= 2000) {
    return distance * .02
  } else if (distance > 2000) {
    return 25
  }
}
