
function distanceFromHqInBlocks(destination) {
  const headquarters = 42
  if (destination <= headquarters) {
    return headquarters - destination
  }
  else {
    return destination - headquarters
  }
}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet(start, end) {
  if (start < end) {
    return (end - start) * 264
  }
  else {
    return (start - end) * 264
  }
}

function calculatesFarePrice(start, end) {
  const distance = distanceTravelledInFeet(start, end)
  if (distance < 400){
    return 0
  }
  else if (distance > 400 && distance <= 2000) {
    return distance * .02
  }
  else if (distance > 2000 && distance <= 2500) {
    return 25
  }
  else if (distance > 2500) {
    return 'cannot travel that far'
  }
}
