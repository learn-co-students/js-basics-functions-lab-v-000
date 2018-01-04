// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  if (block === 42) {
    return 0
  } else if (block > 42) {
    return block - 42
  } else {
    return 42 - block
  }
}

function distanceFromHqInFeet(block) {
  const blocks = distanceFromHqInBlocks(block)

  return blocks * 264
}

function distanceTravelledInFeet(block1, block2) {
  return Math.abs(block1 - block2) * 264
}

function calculatesFarePrice(block1, block2) {
  feet = distanceTravelledInFeet(block1, block2)

  if (feet > 2500) {
    return "cannot travel that far"
  } else if (feet > 2000) {
    return 25
  } else if ( feet > 400) {
    return feet * .02
  } else {
    return 0
  }
}
