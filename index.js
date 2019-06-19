// Code your solution in this file!
function distanceFromHqInBlocks(pickUpBlock) {
  if (pickUpBlock < 42) {
    return 42 - pickUpBlock; 
  } else {
    return pickUpBlock - 42;
  }
}

function distanceFromHqInFeet(pickUpBlock) {
  return distanceFromHqInBlocks(pickUpBlock) * 264;
}

function distanceTravelledInFeet(pickUpBlock, dropOffBlock) {
  if (pickUpBlock < dropOffBlock) {
    return (dropOffBlock - pickUpBlock) * 264;
  } else {
    return (pickUpBlock - dropOffBlock) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance < 400) {
    return 0; 
  } else if (distance > 400 && distance < 2000){
    return ((distance - 400) * 0.02);
  } else if (distance > 2000 && distance < 2499) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}

