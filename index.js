// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
if(blocks > 42)
  return blocks - 42;
  else {
    return 42 - blocks;
  }
}

function distanceFromHqInFeet(location){
  if(location > 42)
  return (location - 42)*264;
  else {
    return (42 - location)*264;
  }
}

function distanceTravelledInFeet(pointA, pointB){
  return (Math.abs(pointA-pointB))*264;
}

function calculatesFarePrice(start, destination){
  let distance = distanceTravelledInFeet(start, destination);

  if(distance > 2500){
    return "cannot travel that far"
  } else if(distance > 2000){
    return 25;
  } else if (distance >400){
    return distance*.02;
  }else {
    return 0;
  }
}
