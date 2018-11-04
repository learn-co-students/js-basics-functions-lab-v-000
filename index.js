// Code your solution in this file!
let distance;

function distanceFromHqInBlocks(distance) {
  if (distance >= 42) {
    return  distance - 42;
  } else if (distance < 42) {
    return -1 * (distance - 42);
  }
}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264;
}

let distance1, distance2;

function distanceTravelledInFeet(distance1, distance2) {
  return distanceFromHqInFeet(distance2) - distanceFromHqInFeet(distance1);
}

let start, destination;

function calculatesFarePrice(start, destination) {
  let distanceTravelled = distanceTravelledInFeet(start, destination);

  if (distanceTravelled < 400) {
    return 0;
  } else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
    return (distanceTravelled - 400) * 0.02 ;
  } else if (distanceTravelled > 2000) {
    if (distanceTravelled > 2500) {
      return 'cannot travel that far'
    } else {
      return 25
    }
  }
}
