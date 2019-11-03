function distanceFromHqInBlocks(someValue) {
  const hqLocation = 42;
  return Math.abs(hqLocation - someValue);
}

function distanceFromHqInFeet(someValue) {
  const blockInFeet = 264;
  return distanceFromHqInBlocks(someValue) * blockInFeet;
}


function distanceTravelledInFeet(startValue, endValue) {
  let blockInFeet = 264;
  let distanceInBlocks = Math.abs(startValue - endValue);
  return blockInFeet * distanceInBlocks;
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  let freeFeet = 400;
  
  if (distance - freeFeet <= 0) {
    return 0;
  }
  else if (distance < 2000) {
    return (distance - freeFeet) * .02 ;
  }
  else if (distance > 2000 && distance < 2500) {
    return 25;
  }
  else {
    return "cannot travel that far";
  }
}