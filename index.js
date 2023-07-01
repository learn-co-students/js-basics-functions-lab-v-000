// Code your solution in this file!
function distanceFromHqInBlocks (distance) {
  if (distance > 42){
    return distance -42
  } else {
    return 42 - distance
  }
}

function distanceFromHqInFeet (distance) {
  return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet (start,end) {
  if (start > end){
    return (start - end)* 264
  } else {
    return (end - start)* 264
  }
}

function calculatesFarePrice(begin, end) {
  const distance = distanceTravelledInFeet(begin, end);
    if (distance <= 400) {
      return 0;
    }
    else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * .02;
    }
    else if (distance > 2000 && distance < 2500) {
      return 25;
    }
    else {
      return "cannot travel that far";
    }
}
