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

function calculatesFarePrice(start, destination){

}