// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return Math.abs(block - 42)
}
function distanceFromHqInFeet(street) {
  return 264 * distanceFromHqInBlocks(street)
}

function distanceTravelledInFeet(first, second) {
  return Math.abs(first - second) * 264
}
function calculatesFarePrice(first, second) {
  let distance = distanceTravelledInFeet(first, second);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance < 2000) {
    return distance * .02;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return "cannot travel that far"
  }
}
