// Code your solution in this file!

function distanceFromHqInBlocks(blockNum) {
  return Math.abs(blockNum - 42);
}

function distanceFromHqInFeet(blockNum) {
  return (264*(distanceFromHqInBlocks(blockNum)));
}

function distanceTravelledInFeet(b1, b2) {
  return Math.abs(b1-b2)*264;
}

function calculatesFarePrice (b1, b2) { 
  const distance = distanceTravelledInFeet(b1, b2); 
  if (distance <= 400) { 
    return 0; 
  } else if (distance > 400 && distance <= 2000) {
    return (distance-400)*0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else if (distance > 2500) {
    return 'cannot travel that far';
  }
}