// Code your solution in this file!
function distanceFromHqInBlocks(endBlock) {
  const blockDist =  (endBlock - 42);
  return blockDist < 0 ? blockDist * -1 : blockDist;
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(startBlock,endBlock) {
  const blockDistToFeet =  (startBlock - endBlock)*264;
  return blockDistToFeet < 0 ? blockDistToFeet * -1 : blockDistToFeet;
}

function calculatesFarePrice(start, destination){
  const feet = distanceTravelledInFeet(start,destination);
  if(feet <= 264){
    return 0
  }else if (feet > 400 && feet < 2000){
    return feet * 0.02
  }else if (feet > 2000 && feet <= 2500){
    return 25
  }else {
  return 'cannot travel that far'
  }
}
