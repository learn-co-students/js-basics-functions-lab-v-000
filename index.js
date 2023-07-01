// Code your solution in this file!
function distanceFromHqInBlocks (location) {
  return Math.abs(location - 42);
}


function distanceFromHqInFeet (location) {
  return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return distance * 0.02;
  } else if (distance >= 2001 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}