// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
  if (pickup >= 42) {
    return pickup - 42;
  } else {
    return 42 - pickup;
  }
}

function distanceFromHqInFeet(pickup) {
  return distanceFromHqInBlocks(pickup)*264;
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function
}

function distanceTravelledInFeet(start, destination) {
  if (destination >= start) {
    return (destination - start)*264;
  } else {
    return (start - destination)*264;
  }
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination)
  if (distance <= 400 ){
    return 0;
  } else if (distance <= 2000) {
    return (distance * 0.02);
  } else if (distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
