// Code your solution in this file!
function distanceFromHqInBlocks(d){
  if (d > 42){
    return d - 42;
  }
  else{
    return 42- d;
  }
}

function distanceFromHqInFeet(d){
  return distanceFromHqInBlocks(d)*264 ;
}

function distanceTravelledInFeet(start, destination){
  if (start < destination){
    return (destination - start) * 264;
  }
  else{
    return (start - destination) * 264;
  }
}

function calculatesFarePrice(start, destination){
  const dis = distanceTravelledInFeet(start, destination);
  if (dis<= 400){
    return 0;
  }
  else if(dis>400 && dis<= 2000) {
    return 0.02 * (dis - 400);
  }
  else if(dis > 2000 && dis < 2500){
    return 25;
  }
  else {
    return "cannot travel that far";
  }
}
