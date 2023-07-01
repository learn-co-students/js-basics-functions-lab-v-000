// Code your solution in this file!
function distanceFromHqInBlocks(block){
  if (block > 42){
    return block -42;
  }else{
    return 42 - block;
  }
}

function distanceFromHqInFeet(block){
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(start_block, end_block){
  if (start_block > end_block){
    return (start_block - end_block) * 264;
  }
  else {
    return (end_block - start_block) * 264;
  }
}

function calculatesFarePrice(start_block, end_block){
  let distance_traveled = distanceTravelledInFeet(start_block, end_block)

  if (distance_traveled <= 400){
    return 0;
  }else if (distance_traveled > 400 && distance_traveled <= 2000) {
    return distance_traveled * 0.02;
  }else if (distance_traveled > 2000 && distance_traveled < 2500) {
    return 25;
  }else {
    return 'cannot travel that far';
  }
}
