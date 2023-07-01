// Code your solution in this file!
function distanceFromHqInBlocks(input) {
  distance = Math.abs(42 - input);
  return distance;
}

function distanceFromHqInFeet(input) {
  let blocks = distanceFromHqInBlocks(input);
  return blocks * 264;
}

function distanceTravelledInFeet(start, end) {
  let blocks = Math.abs(end - start);
  return blocks * 264;
}

function calculatesFarePrice(start, end) {
  let distance = distanceTravelledInFeet(start, end)
  if (distance <= 400) {
    return 0
  } else if (distance > 400 && distance <= 2000){
    return ((distance - 400) * 0.02)
  } else if (distance > 2000 && distance < 2500){
    return 25;
  } else {
   return "cannot travel that far"
  }
}
