// Code your solution in this file!

function distanceFromHqInBlocks(someValue){
  if (someValue >= 42) {
    return someValue - 42;}
    else 
      return 42 - someValue;
}

function distanceFromHqInFeet (someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  if (startBlock > endBlock) {
    return (startBlock - endBlock) * 264;}
      else {
      return (endBlock - startBlock) * 264;}
}

function calculatesFarePrice(startBlock, endBlock) {
  distance = distanceTravelledInFeet(startBlock, endBlock);
  
  if (distance <= 400) {
    return 0;}
    else if (400 < distance && distance <= 2000) {
    return (distance - 400) * 0.02;}
      else if (2000 < distance && distance < 2500) {
      return 25;}
        else {
          return 'cannot travel that far';}
}


