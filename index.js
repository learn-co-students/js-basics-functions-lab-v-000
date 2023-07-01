// Code your solution in this file!
const hq = 42;
function distanceFromHqInBlocks(dis) {
  return Math.abs(dis - hq);
};

function distanceFromHqInFeet(dis) {
  return (distanceFromHqInBlocks(dis) * 264);
};
function distanceTravelledInFeet(start, destination) {
  return (Math.abs(start - destination) * 264);
};
function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination)
  if (distance < 400) {
    return 0;
  } else if (distance < 2000) {
    return (priceOfTrip(distance));
  } else if (distance < 2500){
    return 25;
  } else {
    return "cannot travel that far";
  }
};
function priceOfTrip(distance) {
    return (distance * .02)
};
