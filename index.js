

function distanceFromHqInFeet (block) {
  return distanceFromHqInBlocks(block) * 264;
}



function distanceFromHqInBlocks (block) {
  return Math.abs(42 - block);
}


function distanceTravelledInFeet (start, end) {
  return Math.abs(start - end) * 264
}


function calculatesFarePrice(start, finish){
  const distance = distanceTravelledInFeet(start, finish);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance < 2000) {
    return distance * 0.02;
  } else if (distance > 2500) {
    return 'cannot travel that far';
  } else if (distance > 2000 & distance < 2500) {
    return 25;
  }
}
