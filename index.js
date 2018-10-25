// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  let distance;
  if (location >= 42){
    distance = location - 42;
  }
  else {
    distance = 42 - location;
  }

  return distance;
}

function distanceFromHqInFeet(location){
  let distance;
    if (location >= 42){
    distance = (location - 42) * 264 ;
  }
  else {
    distance = (42 - location) * 264;
  }

  return distance;
}

function distanceTravelledInFeet(loc1,loc2){
  let distance;
  if (loc1 > loc2){
    distance = (loc1 - loc2) * 264;
      }
  else {
    distance = (loc2 - loc1) * 264;
  }

  return distance

}

function calculatesFarePrice(start,destination){
  let price;
  let distance;

  if (distanceTravelledInFeet(start,destination) < 400){
    price = 0;
  }
  else if (distanceTravelledInFeet(start,destination) > 2500){
    return 'cannot travel that far';
  }
  else if (distanceTravelledInFeet(start,destination) > 2000){
    price = 25
  }
  else {
    distance = distanceTravelledInFeet(start,destination) - 400;
    price = distance * .02
  }

  return price;

}




