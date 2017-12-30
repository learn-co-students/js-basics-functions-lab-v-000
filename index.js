// Code your solution in this file!


function distanceFromHqInBlocks(location) {
  if (location > 42) {
    return location -42
  }
  else {
    return 42 - location
  }
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(pickup, dropoff) {
  if (pickup > dropoff) {
    return (pickup - dropoff) * 264 }
  else {
    return (dropoff - pickup) * 264
  }

}

function calculatesFarePrice(pickup, dropoff) {
  distance = distanceTravelledInFeet(pickup, dropoff)
  if (distance <=400) {
    return 0
  }
  else if (distance>400 && distance <= 2000) {
    return distance * 0.02
  }
  else if (distance > 2000 && distance <= 2500) {
    return 25
  }
  else {
    return 'cannot travel that far'
  }
}
