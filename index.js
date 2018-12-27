// Code your solution in this file!

const hqBlock = 42;
const feetInBlock = 264

function distanceFromHqInBlocks(location){
  let distance = location - hqBlock;
  if(distance < 0){
    distance *= -1;
  }
  return distance;
}

function distanceFromHqInFeet(location){
  return distanceFromHqInBlocks(location) * feetInBlock;
}

function distanceTravelledInFeet(origin, destination){
  let distanceInBlocks = origin - destination;
  if(distanceInBlocks < 0){
    distanceInBlocks *= -1;
  }
  return distanceInBlocks * feetInBlock;
}

function calculatesFarePrice(origin, destination){
  let chargeableFeet = distanceTravelledInFeet(origin, destination) - 400
  if (chargeableFeet > 2100){
    return "cannot travel that far";
  } else if (chargeableFeet < 0){
    return 0;
  } else if (chargeableFeet > 0 && chargeableFeet <= 1600){
    return .02 * chargeableFeet;
  } else if (chargeableFeet > 1600 && chargeableFeet <= 2100){
    return 25;
  }
}
