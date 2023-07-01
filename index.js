// Code your solution in this file!
function distanceFromHqInBlocks (pickup_block){
  return Math.abs(pickup_block - 42);
}

function distanceFromHqInFeet (pickup_block){
  return distanceFromHqInBlocks(pickup_block) * 264;
}

function distanceTravelledInFeet (pickup_block, destination_block){
  return Math.abs((pickup_block - destination_block) * 264);
}

function calculatesFarePrice (pickup_block, destination_block){
  const distance = distanceTravelledInFeet(pickup_block, destination_block);
  switch(true){
    case (distance > 2500):
      return 'cannot travel that far';
    case (distance > 2000):
      return 25;
    case (distance > 400):
      return distance * 0.02;
    default:
      return 0;
  }
}
