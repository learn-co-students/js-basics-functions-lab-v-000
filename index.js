// Code your solution in this file!
function distanceFromHqInBlocks(block){
  const hqBlock = 42;
  if(block > 42){
    return (hqBlock - block)*-1;
  }
  else{
  return hqBlock - block;
  }
}

function distanceFromHqInFeet(block){
  return distanceFromHqInBlocks(block)* 264;
}

function distanceTravelledInFeet(start, finish){
  if(start < finish){
    return ((start - finish)*-1)*264
  }
  else{
    return (start - finish)*264
  }
}

function calculatesFarePrice(start, finish){
  distance = distanceTravelledInFeet(start, finish);
  if(distance <= 400){
    return 0;
  }
  else if (distance > 400 && distance <= 2000) {
    return distance * .02;
  }
  else if (distance > 2000 && distance <= 2500) {
    return 25;
  }
  else if (distance > 2500){
    return 'cannot travel that far';
  }
}
