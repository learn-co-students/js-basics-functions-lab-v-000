// Code your solution in this file!
function distanceFromHqInBlocks(num) {
  return Math.abs(42 - num)
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264
}

function distanceTravelledInFeet(num1, num2) {
  return Math.abs(num1 - num2) * 264
}

function calculatesFarePrice(num1, num2) {
  let dist = distanceTravelledInFeet(num1, num2)
  if (dist < 400) {
    return 0
  }
  else if (dist > 400 && dist < 2000) {
    return dist *.02
  }
  else if ( dist > 2000 && dist < 2500) {
    return 25
  }
  else {
    return "cannot travel that far"
  }
}
