// Code your solution in this file!
function distanceFromHqInBlocks(num) {
  return num > 42 ? num - 42 : 42 - num
}

function distanceFromHqInFeet(num) {
  return distanceFromHqInBlocks(num) * 264
}

function distanceTravelledInFeet(start, end) {
  return start > end ? (start - end) * 264 : (end - start) * 264
}

function calculatesFarePrice(start, end) {
  let distance = distanceTravelledInFeet(start, end)
  if (distance > 2500) {
    return "cannot travel that far"
  } else if (distance >= 2000 && distance < 2500) {
    return 25
  } else if (distance >= 400 && distance < 2000) {
    return (distance - 400) * .02
  } else {
    return 0
  }
}
