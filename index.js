// Code your solution in this file!
function distanceFromHqInBlocks (block) {
  const blocks = Math.abs(block - 42);
  return blocks;
}

function distanceFromHqInFeet (block) {
  const distanceInFeet = distanceFromHqInBlocks(block) * 264;
  return distanceInFeet;
}

function distanceTravelledInFeet (start, destination) {
  const blocksTravelled = Math.abs(start - destination);
  const distanceTravelled = blocksTravelled * 264;
  return distanceTravelled;
}

function calculatesFarePrice (start, destination) {
  const distanceTravelled = distanceTravelledInFeet(start, destination);
  let cost;
  if (distanceTravelled > 2500) {
    cost = 'cannot travel that far'
  } else if ( distanceTravelled > 2000 ) {
    cost = 25;
  } else if ( distanceTravelled <= 2000 && distanceTravelled > 400 ) {
    cost = (distanceTravelled - 400) * .02;
  } else {
    cost = 0;
  }

  return cost;

}
