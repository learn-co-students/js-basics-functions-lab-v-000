// Code your solution in this file!

function distanceFromHqInBlocks(street) {
  if (street >= 42) {
    return street - 42
  } else {
    return 42 - street
  }
}


function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(startBlock, endBlock) {
  return calculateVertical(startBlock, endBlock)
}


function calculatesFarePrice(startBlock, endBlock) {
  let distance = distanceTravelledInFeet(startBlock, endBlock)
  if (distance > 2500 ) {
    return 'cannot travel that far'
  } else if (distance < 400) {
    return 0
  } else if (distance > 400 && distance < 2000) {
    return distance * .02
  } else if (distance > 2000) {
    return 25
  }
}


function calculateVertical(startBlock, endBlock) {
  if (startBlock > endBlock) {
    return (startBlock - endBlock) * 264
  } else {
    return (endBlock - startBlock) * 264
  }

}
