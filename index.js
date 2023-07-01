// Code your solution in this file!
function distanceFromHqInBlocks(origin) {
  const hq = 42
  const distance = hq - origin
  return Math.abs(distance)
};


function distanceFromHqInFeet(origin) {
  return distanceFromHqInBlocks(origin) * 264
};


function distanceTravelledInFeet(origin, destination) {
  const distance = (origin - destination) * 264
  return Math.abs(distance)
};

function calculatesFarePrice(origin, destination) {
  const distance = distanceTravelledInFeet(origin, destination)
  if (distance < 400) {
    return 0
  } else if (400 < distance && distance < 2000) {
    return (distance - 400) * 0.02
  } else if (2001 < distance && distance < 2400) {
    return 25
  } else {
    return "cannot travel that far"
  }
};
