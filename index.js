// Code your solution in this file!
function distanceFromHqInBlocks(n) {
  if (n >= 42) {
    return n-42
  } else {
    return 42-n
  }
}

function distanceFromHqInFeet(n) {
  return distanceFromHqInBlocks(n)*264
}

function distanceTravelledInFeet(s, e) {
  if (s>=e) {
    return (s-e)*264
  } else {
    return (e-s)*264
  }
}

function calculatesFarePrice(s, e) {
  let distance = distanceTravelledInFeet(s, e)
  if (distance <= 400) {
    return 0
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02
  } else if (distance > 2000 && distance <= 2500) {
    return 25
  } else {
    return "cannot travel that far"
  }
}
