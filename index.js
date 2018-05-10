// Code your solution in this file!
const hqBlockLocation=42
function distanceTravelledInBlocks(startBlock, destinationBlock){
  return Math.abs(startBlock-destinationBlock)
}
function distanceTravelledInFeet(startBlock, destinationBlock){
  return distanceTravelledInBlocks(startBlock, destinationBlock)*264
}
function distanceFromHqInBlocks (blockNr){
  return distanceTravelledInBlocks(blockNr, hqBlockLocation)
}
function distanceFromHqInFeet (blockNr){
  return distanceTravelledInFeet(blockNr, hqBlockLocation)
}
function calculatesFarePrice(startBlock, destinationBlock){
  const distanceInFeet = distanceTravelledInFeet(startBlock, destinationBlock)
  let farePrice;
  switch(true){
    case distanceInFeet<400:
      farePrice = 0
      break;
    case (distanceInFeet>=400 && distanceInFeet<2000):
      farePrice = 2/100*(distanceInFeet-400)
      break;
    case (distanceInFeet >= 2000 && distanceInFeet < 2500):
      farePrice = 25
      break;
    default:
      farePrice = 'cannot travel that far'
      break;

  }
  return farePrice;
}
