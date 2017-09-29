// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
  return Math.abs(42 - blocks);
};

function distanceFromHqInFeet(blocks){
  return distanceFromHqInBlocks(blocks) *264;
};

function distanceTravelledInFeet(startblock, endblock){
  return Math.abs(startblock-endblock) * 264;
};

function calculatesFarePrice(start, destination){
  let distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400){
    return 0;
  }
  else if (distance > 400 && distance <= 2000){
    return distance * 0.02;
  }

  else if (distance > 2000 && distance <= 2500){
    return 25;
  }
  else {
    return "cannot travel that far"
  }
};
