// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  let result = block - 42
  if (result < 0) {
    result = -result
  }
  return result
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(blockOne, blockTwo) {
  let result
  if (blockOne > blockTwo) {
    result = (blockOne - blockTwo)*264
  } else {
    result = (blockTwo - blockOne)*264
  }
  return result
}

function calculatesFarePrice(start, destination) {
  let fee
  let feet = distanceTravelledInFeet(start, destination)

  if (feet <= 400){
    fee = 0
  } else if (feet > 400 && feet < 2000) {
    fee = (feet - 400) * .02
  } else if (feet > 2000 && feet < 2500) {
    fee = 25
  } else if (feet > 2500){
    fee = 'cannot travel that far'
  }
  return fee
}
