// Code your solution in this file!
function distanceFromHqInBlocks(location){
  return Math.abs(42 - location)
}

function distanceFromHqInFeet(location){
  return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(a, b){
  return Math.abs((a - b) * 264);
}

function calculatesFarePrice(a, b){
  let flatrate = flatrate
  if (Math.abs((a - b) * 264) > 2500) {
  return 'cannot travel that far';
}  else if (Math.abs((a - b) * 264) < 400){
  return 0
} // else if (Math.abs((a - b) * 264) >= 400 &&  Math.abs((a - b) * 264) <=  200){
//  return ((Math.abs((a - b) * 264) - 400) * .02)
//}  else if (Math.abs((a - b) * 264) > 2000 &&  Math.abs((a - b) * 264) <  2500){
//  return ((Math.abs((a - b) * 264) - 400) * .02) + flatrate
}
