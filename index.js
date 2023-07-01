// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber){
    let result = (blockNumber - 42);
    return Math.abs(result);
}

function distanceFromHqInFeet(blockNumber) {
  let result = (distanceFromHqInBlocks(blockNumber) * 264);
  return result;
};

function distanceTravelledInFeet(startPoint, finalPoint) {
  let result = (Math.abs(startPoint - finalPoint) * 264);
  return result;
};

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  }
  else if (400 < distance && distance <= 2000) {
    return .02 * (distance - 400);
  }
  else if (distance > 2000 && distance < 2500) {
    return 25;
  }
  else {
    return 'cannot travel that far';
  }
}


