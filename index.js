// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  return Math.abs(distance - 42)
}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(distance1, distance2) {
  return Math.abs(distance1 - distance2) * 264;
}

function calculatesFarePrice(start, destination) {
  const distanceInFeet = Math.abs(start - destination) * 264;
  switch(true) {
    case distanceInFeet > 400 && distanceInFeet < 2000:
      return distanceInFeet * 0.02;
    case distanceInFeet > 2000 && distanceInFeet < 2500:
      return 25;
    case distanceInFeet > 2500:
      return 'cannot travel that far';
    default:
      return 0;
  }
}
