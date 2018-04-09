// Code your solution in this file!
function distanceFromHqInBlocks(location){
  if (location>=42){
      return location-42;}
      else{
        return 42-location;
      }
}

function distanceFromHqInFeet(location){
 return distanceFromHqInBlocks(location)*264;
}

function distanceTravelledInFeet(start,end){
  let distance=start-end;
  if (distance<0) {distance=-distance;}
 return distance*264;
}

function calculatesFarePrice(start, destination){
  const distance=distanceTravelledInFeet(start,destination);
  let charge=0;
  if (distance>2500){
    return 'cannot travel that far'
  } else if(distance>2000){
    charge=25;
  }  else if (distance>400) {
    charge=distance*.02;
  }
  return charge;
}
