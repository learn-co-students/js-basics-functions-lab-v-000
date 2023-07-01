// Code your solution in this file!
function distanceFromHqInBlocks(start) {
  return Math.abs(start - 42);
}

function distanceFromHqInFeet(start) {
  return distanceFromHqInBlocks(start) * 264;
}

function distanceTravelledInFeet(start, finish) {
  return Math.abs(start - finish) * 264;
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400){
    return 0;
  }
  else if (distance <= 2000) {
    let payment = distance - 400;
    return payment * 0.02;
  }
  else if (distance <= 2500) {
    return 25;
  }
  else {
    return 'cannot travel that far';
  }
}