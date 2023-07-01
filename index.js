// Code your solution in this file!
let distInBlocks;
let distInFeet;
let fbLocation = 42;
const price = .02;

function distanceFromHqInBlocks(cust_location){

  distInBlocks = Math.abs(fbLocation - cust_location);
  return distInBlocks;
}

function distanceFromHqInFeet(location){
  distInFeet =  distanceFromHqInBlocks(location) *264;
  return  distInFeet
}

function distanceTravelledInFeet(start, end){
  return Math.abs(start - end) * 264;
}

function calculatesFarePrice(start, end){
  distance = distanceTravelledInFeet(start, end);

  if (distance <= 400){
    return 0
  } else if (distance >= 400 && distance <= 2000) {
    fare = (distance - 400) * price
    return fare
  } else if (distance >= 2000 && distance <= 2500){
    fare = 25
    return fare
  } else {
    return 'cannot travel that far'
  }

  // if distance
}
