// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  let distance = Math.abs(42-block);
  return distance;
}

function distanceFromHqInFeet(block) {
  let distanceInFeet = distanceFromHqInBlocks(block)*264;
  return distanceInFeet;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  let distanceInFeet = Math.abs(startBlock - endBlock)*264;
  return distanceInFeet;
}

function calculatesFarePrice(startBlock, endBlock) {
  let price
  let distanceInFeet = distanceTravelledInFeet(startBlock, endBlock)

    if (distanceInFeet <= 400) {
      price = 0
      return price
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      price = (distanceInFeet - 400) * 0.02
      return price
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      price = 25
      return price
    } else {
      price = "cannot travel that far"
      return price
    }
}
