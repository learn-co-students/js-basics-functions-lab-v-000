// Code your solution in this file!
const hqBlock = 42;
function  distanceFromHqInBlocks(num) {
if (num < hqBlock) {
  return hqBlock - num
} else {
    return num - hqBlock
}

}

function distanceFromHqInFeet(num) {
  // return distanceFromHqInBlocks(blockNumber) * 264;

  if (num < hqBlock) {
    return ((hqBlock - num)*264)
  } else {
    return ((num - hqBlock)*264)
  }
}

function distanceTravelledInFeet(startBlock , endBlock) {

  if (startBlock < endBlock) {
    return (endBlock - startBlock)*264
  } else {
    return (startBlock - endBlock)*264
  }

}

function calculatesFarePrice(start, destination) {
 //this they made a constant:
 //const distance = distanceTravelledInFeet(start, destination);
  let distance = distanceTravelledInFeet(start, destination)

  if (distance <= 400) {
    return 0
  } else if (distance > 400 && distance <= 2000) {
    return ((distance - 400)*.02)
  } else if (distance > 2000 && distance <= 2500) {
    return 25
  } else if (distance > 2500) {
    return 'cannot travel that far'
  }
}
