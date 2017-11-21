// Code your solution in this file!
function distanceFromHqInBlocks(x) {
  if (x > 42) {
   return x - 42 
  } else {
    return 42 - x
  }
}

function distanceFromHqInFeet(x) {
  return distanceFromHqInBlocks(x) * 264
}

function distanceTravelledInFeet(x, y) {
  return Math.abs(x - y) * 264
}

function calculatesFarePrice(x, y) {
  const distance = distanceTravelledInFeet(x, y)
  switch(true) {
    case (distance < 400):
      return 0
    case (400 <= distance && distance < 2000):
      return distance * .02
    case (2000 <= distance && distance <= 2500):
      return 25.00
    default:
      return 'cannot travel that far'
  }
}