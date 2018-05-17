// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
  if (someValue < 42) {
    return 42 - someValue
  }
  else if (someValue > 42) {
    return someValue - 42
  }
}

function distanceFromHqInFeet(value) {
  return distanceFromHqInBlocks(value) * 264
}

function distanceTravelledInFeet(firstValue, secondValue) {
  if (firstValue < secondValue) {
    let blocks = secondValue - firstValue
    return blocks * 264
  }
  else if (firstValue > secondValue) {
    let blocks = firstValue - secondValue
    return blocks * 264
  }
}

function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination) < 400 ) {
    return 0
  }
  else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {
    num =  distanceTravelledInFeet(start, destination) * .02 - 8
    return parseFloat((num).toFixed(3))
  }
  else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
    return 25
  }
  else if  (distanceTravelledInFeet(start, destination) > 2500){
    return 'cannot travel that far'
  }
}
