// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  result = Math.abs(42 - street);
  return result
}

function distanceFromHqInFeet(street) {
  result = distanceFromHqInBlocks(street) * 264;
  return result
}

function distanceTravelledInFeet(beginingBlock, endingBlock) {
  result = Math.abs(beginingBlock - endingBlock) * 264
  return result
}

function calculatesFarePrice(start, destination) {
  let result
  let distance = distanceTravelledInFeet(start, destination)
  if (distance < 400) {
    result = 0;
  } else if (distance > 400 && distance < 2000) {
    result = 0.02 * (distance - 400)
  } else if (distance > 2000 && distance < 2500) {
    result = 25
  } else if (distance > 2500) {
    result = "cannot travel that far"
  }
  return result
}
