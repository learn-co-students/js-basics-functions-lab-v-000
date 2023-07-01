function distanceFromHqInBlocks(location) {
  distance = location -42
  return Math.abs(distance)
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(start, destination) {
  distance = (destination - start) * 264
  return Math.abs(distance)
}

function calculatesFarePrice(start, destination) {
  distance = distanceTravelledInFeet(start, destination)
  if (distance > 2500) {
    return "cannot travel that far"
  }
  
  if (distance < 400) {
    return 0
  } else if (distance > 400 && distance < 2000) {
    return (distance - 400) * 0.02
  } else {
    return 25
  }
}