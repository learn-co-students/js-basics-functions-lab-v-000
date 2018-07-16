// Code your solution in this file!
function distanceFromHqInBlocks(pickupBlock) {
    return Math.abs(pickupBlock - 42);
}

function distanceFromHqInFeet(pickupBlock) {
  return distanceFromHqInBlocks(pickupBlock) * 264;
}

function distanceTravelledInFeet(startBlock, endBlock){
  return Math.abs(startBlock - endBlock) * 264;
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) > 2500) {
      return "cannot travel that far"
    }
    else if (distanceTravelledInFeet(start, destination) < 400) {
      return 0
    }
    else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {
      return (distanceTravelledInFeet(start, destination) - 400) * .02
    }
    else if (distanceTravelledInFeet(start, destination) > 2000) {
      return 25
    }
  
  }