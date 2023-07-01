// Code your solution in this file!
function distanceFromHqInBlocks(dest) {
  if(dest >= 42) {
    return dest-42;
  } else {
    return 42-dest;
  }
}

function distanceFromHqInFeet(dest) {
  return distanceFromHqInBlocks(dest) * 264;
}

function distanceTravelledInFeet(dest1, dest2) {
  if(dest1 >= dest2) {
    return (dest1-dest2)*264;
  } else {
    return (dest2-dest1)*264;
  }
}

function calculatesFarePrice(start, end){
  let dist = distanceTravelledInFeet(start, end);
  if (dist <= 400) {
    return 0;
  } else if (dist <= 2000) {
    return (dist-400)*.02;
  } else if (dist <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
