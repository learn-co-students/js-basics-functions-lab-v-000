function distanceFromHqInBlocks(pickupLocation) {
  const hqLocation = 42;
  let distance;
  if (pickupLocation > hqLocation) {
    distance = (pickupLocation - hqLocation);
  } else {
    distance = (hqLocation - pickupLocation);
  }
  return distance;
}

function distanceFromHqInFeet(pickupLocation) {
  let distance;
  let blocks;
  blocks = distanceFromHqInBlocks(pickupLocation);
  distance = blocks * 264;
  return distance;
}


function distanceTravelledInFeet(pickupLocation, dropOffLocation) {
  let distance;
  if (pickupLocation > dropOffLocation) {
    distance = (pickupLocation - dropOffLocation) * 264;
  } else {
    distance = (dropOffLocation - pickupLocation) * 264;
  }
  return distance;
}

function calculatesFarePrice(pickupLocation, dropOffLocation) {
  let fare;
  let distance;
  distance = distanceTravelledInFeet(pickupLocation, dropOffLocation);
  if (distance < 400) {
    fare = 0;
  } else if(distance >= 400 && distance <= 2000) {
    fare = (distance - 400) * .02;
  } else if (distance > 2000 && distance <= 2500) {
      fare = 25;
  } else {
    fare = "cannot travel that far";
  }
  return fare;
}
