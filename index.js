// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  return Math.abs(distance - 42);
}

function distanceFromHqInFeet(distance){
  return distanceFromHqInBlocks(distance)*264;
}

function distanceTravelledInFeet(startblock, endblock){
  return Math.abs(endblock - startblock)*264;
}

function calculatesFarePrice(startblock, endblock){
  let feetdistance = distanceTravelledInFeet(startblock, endblock);
  //first 400 are free
  //400 to 2000, 2c per foot
  //2000 to 2500 flat
  //>2500 'cannot travel far'
  if (feetdistance <= 400){
    return 0;
  } else if (feetdistance > 2500) {
    return 'cannot travel that far';
  } else if (feetdistance <= 2000) {
    return (feetdistance - 400) * 2/100;
  } else if (feetdistance > 2000) {
    return 25;
  }
}
