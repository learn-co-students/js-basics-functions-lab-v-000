function distanceFromHqInBlocks (starting_block) {
  return Math.abs(starting_block - 42)
 
}
 
function distanceFromHqInFeet (starting_block) {
  return distanceFromHqInBlocks(starting_block) * 264;
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function
}

function calculateVertical(starting_block, ending_block) {
  return Math.abs(ending_block - starting_block) * 264
}

function distanceTravelledInFeet(starting_block, ending_block) {
  return calculateVertical(starting_block, ending_block)
}

function calculatesFarePrice(starting_block, ending_block) {
  let distance = distanceTravelledInFeet(starting_block, ending_block);
  if (distance > 2500) {
    return "cannot travel that far"
  } else if (distance > 2000) {
    return 25
  } else if (distance > 400) {
    return distance * .02 
  } else {
    return 0
  }

}

// Code your solution in this file!
