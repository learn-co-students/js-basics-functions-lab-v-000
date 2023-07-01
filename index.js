// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return block >= 42 ? block - 42 : 42 - block;
}

function distanceFromHqInFeet(block){
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(origin, destination) {
  return blocksTravelled(origin, destination) * 264;
}

function blocksTravelled(origin, destination) {
  return destination > origin ? destination - origin : origin - destination;
}

function calculatesFarePrice(origin, destination) {
  const distanceInFeet = distanceTravelledInFeet(origin, destination);
  switch(true) {
    case distanceInFeet <= 400:
      return 0;
    case distanceInFeet > 400 && distanceInFeet <= 2000:
      return (distanceInFeet - 400) * 0.02;
    case distanceInFeet > 2000 && distanceInFeet < 2500:
      return 25;
    case distanceInFeet >= 2500:
      return 'cannot travel that far';
  }
}
