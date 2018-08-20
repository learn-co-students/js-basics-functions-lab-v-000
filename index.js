// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return Math.abs(42 - block)
}

function distanceFromHqInFeet(block) {
  return 264 * distanceFromHqInBlocks(block)
}

function distanceTravelledInFeet(start, finish) {
  return 264 * Math.abs(start - finish)
}

function calculatesFarePrice(start, finish) {
  let charged = distanceTravelledInFeet(start, finish)
  if (charged < 400) {
    return 0
  }else if (charged > 400 && charged <= 2000){
    return (charged - 400) * 0.02
  }else if (charged > 2000 && charged <= 2500) {
    return 25
  }else
    return 'cannot travel that far'
}
