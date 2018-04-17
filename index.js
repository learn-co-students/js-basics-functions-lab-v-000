// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  return (blocks > 42) ? (blocks - 42) : (42 - blocks);
}

function distanceFromHqInFeet(feet) {
  return distanceFromHqInBlocks(feet) * 264;
}

function distanceTravelledInFeet(start, end){
  return ((start < end) ? ((end - start)*264) : ((start - end)*264) );
}

function calculatesFarePrice(start, destination){
  if (distanceTravelledInFeet (start, destination) < 400) {
    return 0;
  } else if (distanceTravelledInFeet(start, destination) < 2000){
    return (((distanceTravelledInFeet (start, destination)) - 400) * .02);
  } else if (distanceTravelledInFeet (start, destination) < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
