// Code your solution in this file!
function distanceFromHqInBlocks(someNumber){
  return Math.abs(42-someNumber)
}

function distanceFromHqInFeet(someNumber){
  return 264*distanceFromHqInBlocks(someNumber);
}

function distanceTravelledInFeet(startBlock, stopBlock){
  return 264*Math.abs(startBlock - stopBlock)
}


function calculatesFarePrice(startBlock, stopBlock) {
  let dist = distanceTravelledInFeet(startBlock, stopBlock);
  if (dist <= 400) {
    return 0
  } else if (dist > 400 && dist <= 2000){
    return 0.02*(dist-400)
  } else if (dist > 2000 && dist <=2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}
