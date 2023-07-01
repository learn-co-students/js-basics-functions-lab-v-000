// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  return (42 > blocks)? 42-blocks : blocks-42
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264
}

function distanceTravelledInFeet(pickup, dropoff) {
    return (pickup > dropoff) ? (pickup - dropoff) * 264 : (dropoff - pickup) * 264
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination)

  if (distance < 400) {
    return 0;
  } else if(distance > 400 && distance < 2001) {
    return (distance - 400) * .02;
  } else if(distance > 2000 && distance < 2501) {
    return 25;
  } else if(distance > 2500) {
    return 'cannot travel that far'
  }
}
