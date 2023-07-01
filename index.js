// Code your solution in this file!
const feetInABlock = 264;

function distanceFromHqInBlocks(distance){
  return Math.abs(distance - 42);
}

function distanceFromHqInFeet(distance){
  return feetInABlock * distanceFromHqInBlocks(distance);
}

function distanceTravelledInFeet(start_block, end_block){
  return feetInABlock * Math.abs(end_block - start_block);
}

function calculatesFarePrice(start, destination){
  let ride = distanceTravelledInFeet(start, destination);

  if(ride > 2500){
    return "cannot travel that far";
  } else if(ride > 2000){
    return 25;
  } else if(ride < 400) {
    return 0;
  } else{
    let chargeableDistance = ride - 400;
    return 0.02 * chargeableDistance;
  }
}
