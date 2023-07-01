// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  let result
  if (location > 42) {
    result = location - 42
  }
  else if (location < 42) {
    result = 42 - location
  }
  else {
    result = 0
  }
  return result
}

function distanceFromHqInFeet(location) {
  let result
  result = distanceFromHqInBlocks(location) * 264
  return result
}

function distanceTravelledInFeet(start, end) {
  let result
  if (start > end) {
    result = (start - end) * 264
  }
  else if (end > start) {
    result = (end - start) * 264
  }
  else {
    result = 0
  }
  return result
}

function calculatesFarePrice(start, destination) {
  let result
  if (distanceTravelledInFeet(start, destination) < 400) {
    result = 0
  }
  else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {
    result = (distanceTravelledInFeet(start, destination) - 400) * .02
  }
  else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
    result = 25
  }
  else {
    result = "cannot travel that far"
  }
  return result
}
