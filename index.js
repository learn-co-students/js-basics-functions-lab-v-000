// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
  return Math.abs((42 - blockNumber));
}

function distanceFromHqInFeet(blockNumber) {
  return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet(startBlock, endBlock){
  return Math.abs(startBlock - endBlock) * 264;
}

function calculatesFarePrice(startBlock, endBlock){
  let feetTravelled = distanceTravelledInFeet(startBlock, endBlock)
  let fare = 0;
  switch (true) {
    case feetTravelled > 2500:
      fare = 'cannot travel that far';
      break;
    case feetTravelled > 2000:
      fare = 25;
      break;
    case feetTravelled > 400:
      fare = Math.min(feetTravelled - 400, 1600) * 0.02;
      break;
  }
  return fare;
}
