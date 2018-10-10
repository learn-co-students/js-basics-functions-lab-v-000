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
    let distance = (start - destination) * 264
    return distance
  }
  let distance = (destination - start) * 264
  return distance
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination)

  if (distance <= 400) {
    let fare = 0
    return fare
  }

  if (distance > 400 && distance <= 2000 ) {
    let fare = (distance - 400) * .02
    return fare
  }

  if (distance > 2000 && distance < 2500) {
    let fare = 25
    return fare
  }

  if (distance > 2500) {
    let fare = 'cannot travel that far'
    return fare
  }
}
