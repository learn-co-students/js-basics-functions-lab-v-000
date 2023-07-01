// Code your solution in this file!
//
function distanceFromHqInBlocks(pickupLocation) {
  //returns number of blocks from hq on 42nd street
  if (pickupLocation > 42){
    return pickupLocation - 42;
  } else {
    return 42 - pickupLocation;
  }
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  if (startBlock > endBlock) {
    return (startBlock - endBlock) * 264;
  }
  else {
    return (endBlock - startBlock) * 264;
    }
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  let price;
  if (distance < 400) {
    price = 0;
  }
  else if (400 <= distance && distance <= 2000) {
    price = (distance - 400) * .02;
  }
  else if (2000 <= distance && distance <= 2500){
    price = 25;
  }
  else {
    price = 'cannot travel that far';
  }
  return price;
}
