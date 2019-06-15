// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
  let numberOfBlocks;

  const HQ = 42;

  if (streetNumber > HQ) {
    numberOfBlocks = streetNumber - HQ;
  }else {
    numberOfBlocks = HQ - streetNumber;
  }

  return numberOfBlocks;
}

function distanceFromHqInFeet(streetNumber) {
  let feet = distanceFromHqInBlocks(streetNumber) * 264;
  return feet
}

function distanceTravelledInFeet(x, y) {
  if(x > y) {
    return( (x - y) * 264 );
  }
  if(y > x) {
    return( (y - x) * 264);
  }
}

function calculatesFarePrice(start, destination) {

  const distanceInFeet = distanceTravelledInFeet(start, destination);
  let pennies = 0;
  let message;

  if (distanceInFeet < 400){
    pennies = 0;
  }else if (distanceInFeet >= 400 && distanceInFeet < 2000){
    pennies = (distanceInFeet - 400) * 2;
  }else if (distanceInFeet >= 2000 && distanceInFeet < 2500){
    pennies = 2500
  }else if (distanceInFeet >= 2500) {
    message = 'cannot travel that far';
  }
  return message || pennies / 100;
}