// or using absolute
//
// function distanceFromHqInBlocks(distance) {
//    return Math.abs(distance - 42)
// }

function distanceFromHqInBlocks(distance) {
  if (distance > 42){
   return distance - 42
 } else {
   return 42 - distance
 }
}


function distanceFromHqInFeet (distance) {
 return  distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(a,b) {
 return  Math.abs(b - a) * 264;
}

function calculatesFarePrice(a, b) {
  let distance = distanceTravelledInFeet(a,b);

  if (distance < 400){
   return 0;
 } else if (distance > 399 && distance < 2000){
   return (distance - 400) * 0.02;
 } else if (distance > 1999 && distance < 2500) {
   return 25;
 } else {
   return 'cannot travel that far';
 }
}
