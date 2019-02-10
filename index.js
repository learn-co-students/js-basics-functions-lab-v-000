// Code your solution in this file!
function distanceFromHqInBlocks(x) {
  let distance = Math.abs(42 - x);
  return distance;
}

function distanceFromHqInFeet(x) {
  let distance = distanceFromHqInBlocks*264;
  return distance;
}

function distanceTravelledInFeet(x, y) {
  let distance = Math.abs(x-y)*264;
  return distance;
}
