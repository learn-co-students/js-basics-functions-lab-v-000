// Code your solution in this file!
let hq = 42;
function distanceFromHqInBlocks(num) {
  if (num > hq) {
    return num - hq;
  } else {
    return hq - num;
  }
}

function distanceFromHqInFeet(num) {
  if (num > hq) {
    return (num - hq) * 264;
  } else {
    return (hq - num) * 264;
  }
}

function distanceTravelledInFeet(from, to) {
  if (from > to) {
    return (from - to) * 264;
  } else {
    return (to - from) * 264;
  }
}
 
function calculatesFarePrice(start, destination) {
  distance = distanceTravelledInFeet(start, destination)
  if (distance < 400) {
    return 0;
  } else if (distance > 400 && distance < 2000) {
    return distance * .02;
  } else if (distance > 2000 && distance < 2500) { 
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
