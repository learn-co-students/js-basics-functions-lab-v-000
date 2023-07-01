// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  let result = distance - 42 > 0 ? distance - 42 : 42 - distance;
  return result
}

function distanceFromHqInFeet(distance) {
  let feet = distanceFromHqInBlocks(distance) * 264
  return feet
}

function distanceTravelledInFeet(start, end) {
  let distance = start - end > 0 ? start - end : end - start
  distance *= 264
  return distance
}

function calculatesFarePrice(start, end) {
  let price
  let distance = distanceTravelledInFeet(start, end)
  if (distance <= 400) {
    price = 0
  } else if (distance > 400 && distance < 2000) {
    price = (distance - 400) * .02
  } else if (distance > 2000 && distance < 2501) {
    price = 25
  } else {
    price = "cannot travel that far"
  }
  return price
}