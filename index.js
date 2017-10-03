// Code your solution in this file!
function distanceFromHqInBlocks(block){
  if(block > 42){
    return block - 42
  } else {
    return 42 - block
  }
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(starting_block, ending_block) {
  if(starting_block < ending_block) {
    return (ending_block - starting_block) * 264;
  } else {
    return (starting_block - ending_block) *264;
  }
}

function calculatesFarePrice(starting_block, ending_block) {
  if(distanceTravelledInFeet(starting_block, ending_block) <= 400) {
    return 0;
  }
  else if (distanceTravelledInFeet(starting_block, ending_block) > 400 && distanceTravelledInFeet(starting_block, ending_block) <= 2000) {
    return (distanceTravelledInFeet(starting_block, ending_block)) * .02;
  }

  else if (distanceTravelledInFeet(starting_block, ending_block) > 2000 && distanceTravelledInFeet(starting_block, ending_block) < 2500) {
    return 25;

  }
  else {
    return `cannot travel that far`
  }
}
