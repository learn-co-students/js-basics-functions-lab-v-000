// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
  let distance = pickup - 42
  if (pickup >= 42) {
 return distance
 } else {
   return -distance
 }
}

function distanceFromHqInFeet(pickup) {
  return distanceFromHqInBlocks(pickup) * 264
}

function distanceTravelledInFeet(from, to) {
  return Math.abs(from - to) * 264
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
   return 0;
} else if (distance > 400 && distance <= 2000) {
   return distance * 0.02;
} else if (distance > 2000 && distance <= 2500) {
  return 25;
} else {
  return 'cannot travel that far';
  }
}
