// Code your solution in this file!
const blockFeet = 264;

function distanceFromHqInBlocks(value) {
  const hq = 42;
  if (value > hq) {
    return value - hq;
  }
  else {
    return hq - value;
  }
}

function distanceFromHqInFeet(value){
  return distanceFromHqInBlocks(value) * blockFeet;
}

function distanceTravelledInFeet(start,end){
  if (start < end) {
    return (end - start) * blockFeet;
  }
  else {
    return (start - end) * blockFeet;
  }
}

function calculatesFarePrice(start,end){
  let distance = distanceTravelledInFeet(start,end);
  if (distance < 400) {
      return 0;
  }
  else if (distance >= 400 && distance <= 2000){
    return (distance - 400) * .02;
  }
  else if (distance > 2000 && distance < 2500){
    return 25;
  }
  else {
    return "cannot travel that far";
  }
}
