// Code your solution in this file!

const headquarters = 42
function distanceFromHqInBlocks(pickup) {
  if (pickup > headquarters) {
  return pickup - headquarters
  } else {
  return headquarters - pickup
  }
}

function distanceFromHqInFeet(pickup) {
  return distanceFromHqInBlocks(pickup) * 264
}

function distanceTravelledInFeet(pickup, dropoff) {
  if (pickup > dropoff) {
    return (pickup - dropoff) * 264
  } else {
    return (dropoff - pickup) * 264
  }
}

function calculatesFarePrice(pickup, dropoff) {
  let distance = distanceTravelledInFeet(pickup, dropoff)
  let price = 25
  if (distance < 400) {
    return 0
  } else if (distance < 2000) {
    return distance * 0.02
  } else if (distance < 2500) {
    return price
  } else {
    return 'cannot travel that far'
  }
}
