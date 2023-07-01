// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
  const hq = 42;
  if (blocks > 42){
    return blocks - hq;
  } else {
    return hq - blocks;
  }
}

function distanceFromHqInFeet(feet){
  const block = 264;
  return block * distanceFromHqInBlocks(feet);
}

function distanceTravelledInFeet(start, end){
  let distance = 0;
  let feet = 264;
  if (start > end){
    distance = start - end;
    return distance * feet;
  } else {
    distance = end - start;
    return distance * feet;
  }
}

function calculatesFarePrice(start, end){
  let total = distanceTravelledInFeet(start, end)-400;
  let cost = 0.02;
  if (distanceTravelledInFeet(start, end) <= 400) {
    return 0;
  } else if (total <= 1600) {
    return cost * total;
  } else if (total <= 2000) {
    return 25;
  } else if (total <= 2500 ) {
    return 'cannot travel that far';
  }
  
}