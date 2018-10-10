function distanceFromHqInBlocks(location) {
  if (location > 42) {
    let distance = location - 42
    return distance
  }
  let distance = 42 - location
  return distance
}

function distanceFromHqInFeet(location) {
   return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(start, destination) {
  if (start > destination) {
    return (start - destination) * 264
  }
  return (destination - start) * 264
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination)

  if (distance <= 400) {
    return 0
  } else if (distance > 400 && distance <= 2000 ) {
    return (distance - 400) * .02
  } else if (distance > 2000 && distance < 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}
