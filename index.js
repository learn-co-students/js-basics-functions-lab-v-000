// Code your solution in this file!
const hq = 42

function distanceFromHqInBlocks(location) {
  return Math.abs(hq - location)
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264
}

function calculatesFarePrice(start, end) {
  distance = distanceTravelledInFeet(start, end)

  if (distance < 400) {
    return 0
  } else if ((distance => 400) && (distance <= 2000)) {
    return (distance * 2) / 100
  } else if ((distance > 2000) && (distance < 2500)) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}
