// Code your solution in this file!
function distanceFromHqInBlocks(pos){
  return Math.abs(42-pos);
}

function distanceFromHqInFeet(pos){
  return distanceFromHqInBlocks(pos)*264;
}

function distanceTravelledInFeet(str,pos){
  return Math.abs(str-pos)*264;
}

function calculatesFarePrice(str,dest){
  const dist=distanceTravelledInFeet(str,dest);
  let fare;
  if (dist>2500){
    fare="cannot travel that far";
  } else if(dist<400){
    fare=0;
  } else if(dist<2000){
    fare=0.02*(dist-400);
  } else {
    fare=25;
  }
  return fare;
}