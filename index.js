// Code your solution in this file!
function distanceFromHqInBlocks(distance){
  if (distance >= 42){
    return distance - 42;
  }
  return 42 - distance;
}

function distanceFromHqInFeet(distance){
  return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(start, end){
  return Math.abs(start - end) * 264;
}

function calculatesFarePrice(start, end){
  if (distanceTravelledInFeet(start, end) < 400){
    return 0;
  } else if (distanceTravelledInFeet(start, end) >= 400 && distanceTravelledInFeet(start, end) <= 2000){
    return (distanceTravelledInFeet(start, end) - 400) * .02;
  } else if (distanceTravelledInFeet(start, end) > 2000 && distanceTravelledInFeet(start, end) < 2500){
    return 25;
  } else {
    return 'cannot travel that far';
  }
}