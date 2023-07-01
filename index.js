// Code your solution in this file!
const hqBlock=42

function distanceFromHqInBlocks(block) {
  return Math.abs(block-hqBlock);
}


function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block)*264
}


function distanceTravelledInFeet(startBlock, endBlock){
  return Math.abs(startBlock-endBlock)*264
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance < 400) {
   return 0;
  }else if(distance>400 && distance<2000){
    return distance*.02;
  }else if(distance>2000 && distance<2500){
    return 25;
  }else{
    return 'cannot travel that far';
  }
}
