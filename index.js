// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  var blocks = distance - 42;
  if (blocks > 0) {
    return blocks;
} else {
    return -(blocks);
}


}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance)* 264;
}

function distanceTravelledInFeet(distanceOne, distanceTwo) {
  return -(distanceFromHqInFeet(distanceOne) - distanceFromHqInFeet(distanceTwo));

}
function calculatesFarePrice(distanceOne, distanceTwo) {
  var totalDistance = distanceTravelledInFeet(distanceOne, distanceTwo);
  if (totalDistance < 400) {
    return 0;
  } else if ((totalDistance > 400) && (totalDistance < 2000)) {
    return (totalDistance - 400) * 0.02;
  }
    else if ((totalDistance > 2000) && (totalDistance < 2500)) {
    return 25;
  }
  else  {
    return 'cannot travel that far';
  }
}
