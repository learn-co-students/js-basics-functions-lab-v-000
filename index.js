// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  if (someValue > 42) {
    return someValue - 42;
  }
  else {
    return 42 - someValue;
  }
}

function distanceFromHqInFeet(someValue){
  return (distanceFromHqInBlocks(someValue) * 264);
}

function distanceTravelledInFeet(startValue, endValue){
  if (endValue > startValue) {
    return ((endValue - startValue) * 264);
  }
  else
    return ((startValue - endValue) * 264);
}

function calculatesFarePrice(start, destination){
  let distance = distanceTravelledInFeet(start, destination)
  if (distance < 400) {
    return 0
  }
  else if (distance > 400 && distance < 2000) {
    return ((distance - 400) * 0.02)
  }
  else if (distance > 2000 && distance < 2500) {
    return 25
  }
  else {
    return "cannot travel that far"
  }
}
