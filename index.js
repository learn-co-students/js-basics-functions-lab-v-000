 // Code your solution in this file!
function distanceFromHqInBlocks(blockNumber){
  let distance = blockNumber - 42;
  return Math.abs(distance);
}

function distanceFromHqInFeet(blockNumber){
  let feet = distanceFromHqInBlocks(blockNumber)*264;
  return feet;
}

function distanceTravelledInFeet(startBlock, endBlock){
  let blocksTravelled = Math.abs(startBlock - endBlock);
  let distanceInFeet = blocksTravelled * 264;
  return distanceInFeet;
}

function calculatesFarePrice(start, destination){
  let distance = distanceTravelledInFeet(start, destination);
  let price = 0;

  switch (distance){
    case  distance < 400 :
      price = 0;
      break;
    case distance > 400 && distance < 2000:
      price = (distance-400)*0.02;
      break;
    case distance > 2500:
      price = "cannot travel that far";
      break;
    case distance > 2000:
      price = 25;
      break;
    }
    return price;
}
