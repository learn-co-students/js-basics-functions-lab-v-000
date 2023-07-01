// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  let blocks = distance > 42 ? distance - 42 : 42 - distance;
  return blocks
}

function distanceFromHqInFeet (distance) {
  let blocks = distanceFromHqInBlocks(distance);
  let feet = blocks*264;
  return feet;
}

function distanceTravelledInFeet(start, end) {
  let travel = start > end ? (start - end)*264 : (end - start)*264;
  return travel;
}

function calculatesFarePrice(start, end) {
  let cost;
  let travel = distanceTravelledInFeet(start, end);
  if (travel <= 400){ 
    cost = 0;
  } else if (travel > 400 && travel < 2000) {
    cost = (travel - 400)*0.02;
  } else if (travel > 2000 && travel < 2500) {
    cost = 25;
  } else {
    cost = 'cannot travel that far';
  }
  return cost;
}
