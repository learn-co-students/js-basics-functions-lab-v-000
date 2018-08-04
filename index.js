// Code your solution in this file!
function distanceFromHqInBlocks(block){
  const scuberHq = 42;
  let distanceToHq = scuberHq - block;
  if (distanceToHq < 0) {distanceToHq = -1 * distanceToHq}
  return distanceToHq;
}

function distanceFromHqInFeet(block){
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(start, finish){
  let blocks = start - finish;
  if (blocks < 0) {blocks = -1 * blocks}
  return blocks * 264;
}

function calculatesFarePrice(start, destination){
  const distance = distanceTravelledInFeet(start, destination);
  let cost;
  if (distance <= 400) {
    cost = 0;
  } else if (distance <= 2000) {
    cost = (distance - 400) * .02;
  } else if (distance <= 2500) {
    cost = 25;
  } else {
    cost = "cannot travel that far";
  }

  return cost;
}
