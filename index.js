// Code your solution in this file!
function distanceFromHqInBlocks (num) {
  //returns the number of blocks given a value
  return Math.abs(num - 42)
}

function distanceFromHqInFeet (someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
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

// switch (distance) {
//     case ((distance > 400) && (distance < 2000)):
//         result =  (distance - 400) * .02;
//         break;
//     case distance <= 400:
//         result =  0;
//         break;
//     case distance > 2500:
//         result = 'cannot travel that far';
//         break;
//     case distance > 2000:
//         result =  25;
//         break;
//
//   }
  return result;
}
