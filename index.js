// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  if (street >= 42) {
    return (street - 42);
  } else {
    return (42 - street);
  }
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(start, destination) {
  if (start >= destination) {
    return ((start - destination) * 264);
  } else {
    return ((destination - start) * 264);
  }
}

function calculatesFarePrice(start, destination) {
  distance = distanceTravelledInFeet(start, destination);
  if (distance < 400 ) {
    return 0;
  } else if (distance > 2500) {
    return 'cannot travel that far';
  } else if (distance < 2000){
    return (distance * .02);
  } else if (distance > 2000) {
    return 25;
  }
}
