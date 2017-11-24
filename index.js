// Code your solution in this file!
function distanceFromHqInBlocks (dest) {
  return Math.abs(dest - 42)
}

function distanceFromHqInFeet (dest) {
  return distanceFromHqInBlocks(dest) * 264;
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264
}

function calculatesFarePrice(start, end) {
  const distance = distanceTravelledInFeet(start, end)

  if (distance <= 400) {
    return 0
  }
  else if (distance > 400 && distance <=2000) {
    return distance * .02
  }
  else if (distance > 2000 && distance < 2500) {
    return 25
  }
  else {
    return "cannot travel that far"
  }
}
