 s// Code your solution in this file!
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
  let distance = distanceFromHqInFeet(start, destination);
  let price;
  switch (distance){
    case(distance < 400){
      price = 0;
    }
  }
  return price;
}
