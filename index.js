// Code your solution in this file!

function distanceTravelledInFeet(start, destination) {
 return Math.abs(start - destination) * 264; 
 
}

function distanceFromHqInBlocks(block) {
  return Math.abs(42 - block);
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  const adjDistance = distance - 400;
  if (distance < 400) {
  return 0;
  } else if (distance > 400 && distance < 1999 ) {
    return (distance - 400) * 0.02
  } else if (distance > 2000 && distance < 2499 ) {
    return 25;
  } else if (distance > 2500) {
    return 'cannot travel that far';
  }}