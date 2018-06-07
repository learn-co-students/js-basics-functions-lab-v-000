// Code your solution in this file!
function distanceFromHqInBlocks(x){
  return Math.abs(42 - x);
}

function distanceFromHqInFeet(x){
  return distanceFromHqInBlocks(x) * 264;
}

function distanceTravelledInFeet(start_block, end_block){
  const distanceInBlocks = Math.abs(start_block - end_block);

  return distanceInBlocks * 264;
}

function calculatesFarePrice(start,destination){
  const distance = distanceTravelledInFeet(start, destination)
  if ( distance > 2500){
    return 'cannot travel that far';
  }
  else if (distance > 2000 && distance < 2500) {
    return 25;
  }
  else if (distance >= 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  }
  else {
    return 0;
  }

}
