// Code your solution in this file

function distanceFromHqInBlocks(street) {
  let result;
  let hq = 42;
  if (street > hq) {
    result = street - hq;
  }
  else{
    result = hq - street
  }
  return result
}

function distanceFromHqInFeet(street) {
  let result = distanceFromHqInBlocks(street) * 264;
  return result
}

function distanceTravelledInFeet(street1, street2) {
  let result;
  if (street1 > street2) {
    result = 264 * (street1 - street2);
  }
  else{
    result = 264 * (street2 - street1);
  }
  return result
}

function calculatesFarePrice(start, destination) {
  let result;
  if (distanceTravelledInFeet(start, destination) < 400) {
    result = 0;
  }
  else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {
    result = (distanceTravelledInFeet(start, destination) - 400) * .02;
  }
  else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2501) {
    result = 25;
  }
  else if (distanceTravelledInFeet(start, destination) > 2500){
    result = 'cannot travel that far';
  }
  return result
}
