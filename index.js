// Code your solution in this file!
function distanceFromHqInBlocks (blocks) {
  return Math.abs(blocks - 42)
}

function distanceFromHqInFeet (blocks) {
   return distanceFromHqInBlocks (blocks) * 264
}

function distanceTravelledInFeet (origin, destination) {
  return Math.abs(origin - destination) * 264
}

function calculatesFarePrice (origin, destination) {
  let x = distanceTravelledInFeet(origin, destination);
    if (x <= 400) {
      return 0;
    } else if (x > 400 && x <= 2000) {
      return x * 0.02;
    } else if (x > 2000 && x <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
