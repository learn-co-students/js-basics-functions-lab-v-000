// Code your solution in this file!
function distanceFromHqInBlocks (address){
    return Math.abs(address - 42);
}

function distanceFromHqInFeet (address) {
  return distanceFromHqInBlocks(address) * 264;
}
