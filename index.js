// Code your solution in this file!
function distanceFromHqInBlocks (pickup) {
  return Math.abs(42 - pickup)
}

function distanceFromHqInFeet (pickup) {
  return distanceFromHqInBlocks(pickup) * 264
}

function distanceTravelledInFeet (pickup, dropoff) {
  return (Math.abs(pickup - dropoff)) * 264
}

function calculatesFarePrice (pickup, dropoff) {
  distance = distanceTravelledInFeet(pickup, dropoff)
  if (distance > 2500) {
    return 'cannot travel that far'
  } else if (distance >= 2000 && distance <= 2500) {
    return 25
  } else if (distance >= 400 && distance <= 2500) {
    return (distance - 400) * 0.02
  } else {
    return 0
  }
}
