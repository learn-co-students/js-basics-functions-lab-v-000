// Code your solution in this file!
function distanceFromHqInBlocks (num) {
  return Math.abs(num - 42)
}

function distanceFromHqInFeet (someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
  }

function distanceTravelledInFeet (x,y) {
  return distanceFromHqInFeet (y) - distanceFromHqInFeet (x)
}

function calculatesFarePrice (x,y) {
  let distance = distanceTravelledInFeet(x,y);
  let result;

  if ((distance > 400) && (distance < 2000)) {
   result =  (distance - 400) * .02;
 } else if (distance <= 400) {
   result =  0;
 } else if (distance > 2500){
   result = 'cannot travel that far';
 } else if (distance > 2000){
   result =  25;
 }
  return result;
}
