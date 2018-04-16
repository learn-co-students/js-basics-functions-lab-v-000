// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  return Math.abs(location - 42)
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264
}

function calculatesFarePrice(start, end) {
  let numOfFeet = distanceTravelledInFeet(start, end)

  if (numOfFeet < 400) {
    return 0;
  } else if (numOfFeet >= 400 && numOfFeet <= 2000) {
    return (numOfFeet - 400) * .02
  } else if (numOfFeet > 2000 && numOfFeet < 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}