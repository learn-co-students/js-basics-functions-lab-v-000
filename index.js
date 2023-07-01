// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return Math.abs(42 - block)
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(block1, block2) {
  return Math.abs(block1 - block2) * 264
}

function calculatesFarePrice(start, destination) {
  const feet = distanceTravelledInFeet(start, destination)
  let price
  if (feet <= 400) {
    price = 0
  }
  else if (feet > 400 && feet <= 2000) {
    price = .02 * (feet - 400)
  }
  else if (feet > 2500) {
    price = 'cannot travel that far'
  }
  else {
    price = 25
  }
  return price
}
