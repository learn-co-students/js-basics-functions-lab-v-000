// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
  if (blockNumber > 42) {
   return blockNumber - 42
 } else {
   return 42 - blockNumber
 }
}

function distanceFromHqInFeet(blockNumber) {
  let distanceInFeet = distanceFromHqInBlocks(blockNumber) * 264;
  return distanceInFeet;
}

function distanceTravelledInFeet(blockNumber1, blockNumber2) {
  if (blockNumber1 > blockNumber2) {
    let distanceInFeet = (blockNumber1-blockNumber2) * 264;
    return distanceInFeet;
  } else {
    let distanceInFeet = (blockNumber2-blockNumber1) * 264;
    return distanceInFeet;
  }
}

function calculatesFarePrice(start, destination) {
  if (start > destination) {
    if ((start-destination) <= 1) {
      let price = 0;
      return price;
    } else {
        if (((start-destination)*264) > 2500) {
          return 'cannot travel that far'
        } else
          if (((start-destination)*264) > 2000) {
            return 25;
          } else if (((start-destination)*264) > 400) {
            return ((start-destination)*264) * .02
          }
    }
  } else if (destination > start) {
    if (((start-destination)*264) > 2500) {
      return 'cannot travel that far'
    } else
      if ((destination-start) <=1) {
        let price = 0;
        return price;
      } else {
        if (((destination-start)*264) > 2000) {
          return 25;
        }
      }
  }
}
