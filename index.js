// Code your solution in this file!
function distanceFromHqInBlocks (address){
    return Math.abs(address - 42);
}

function distanceFromHqInFeet (address) {
  return distanceFromHqInBlocks(address) * 264;
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264;
}

function calculatesFarePrice (start, end) {
  
}
