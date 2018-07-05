// Code your solution in this file!
function distanceFromHqInBlocks (streetNumber) {
  // calculates the distance from 42nd street to the destination in blocks
  let numberOfBlocksFromHQ = streetNumber - 42
  if (numberOfBlocksFromHQ < 0){
    return numberOfBlocksFromHQ * -1;
  } else {
    return numberOfBlocksFromHQ;
  }
}

function distanceFromHqInFeet(streetNumber) {
  // Converts the number of blocks travelled into feet using the distanceFromHqInBlocks function
  return distanceFromHqInBlocks(streetNumber) * 264;
}

function distanceTravelledInFeet(pickup, destination) {
  // Calculates the distance travelled in feet when given the block it started on and eneded.
  let distanceTravelled = pickup - destination;
  if (distanceTravelled < 0) {
    return (distanceTravelled * -1) * 264;
  } else {
    return distanceTravelled * 264;
  }
}

function calculatesFarePrice(start, destination) {
  // uses the distanceTravelledInFeet method to return price for traveling a distance.
  if (distanceTravelledInFeet(start, destination) < 400){
    return 0;
  } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {
    return (distanceTravelledInFeet(start, destination) - 400) * .02;
  } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
    return 25;
  } else if (distanceTravelledInFeet(start, destination) > 2500) {
    return "cannot travel that far";
  }
}
