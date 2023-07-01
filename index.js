// Code your solution in this file!

function distanceFromHqInBlocks(location) {
  if(location > 42) {
    return location - 42;
  }else {
    return 42 - location;
  }
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(dis1, dis2) {
  return Math.abs(dis1 - dis2)*264
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);

  switch(true){
    case(distance < 400):
      return 0;
    case(distance < 2000):
      return distance * 0.02;
    case(distance > 2500):
      return 'cannot travel that far';
    case(distance > 2000):
      return 25;
  }
}
