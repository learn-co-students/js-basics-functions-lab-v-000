// Code your solution in this file!

function distanceFromHqInBlocks(block) {

  if (block === 42) {
    return 0
  }
  else if (block > 42) {
    return block - 42
  }
  else if (block < 42) {
    return 42 - block
  }

}

function distanceFromHqInFeet(block) {

  return distanceFromHqInBlocks(block) * 264

}

function distanceTravelledInFeet(block1, block2) {

  return (Math.abs(block1 - block2)) * 264

}

function calculatesFarePrice(start, destination) {

  var feet = distanceTravelledInFeet(start, destination)

  if (Math.abs(start - destination) === 1) {
    return 0
  }
  else if (feet > 400 && feet < 2000) {
    return .02 * feet
  }
  else if (feet > 2000 && feet < 2500){
    return 25
  }
  else if (feet >2500) {
    return `cannot travel that far`
  }
}
