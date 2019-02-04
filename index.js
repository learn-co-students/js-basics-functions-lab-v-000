function distanceFromHqInBlocks(pickupLocation) {
  const hqLocation = 42;
  if (pickupLocation > hqLocation) {
    return (pickupLocation - hqLocation);
  } else {
    return (hqLocation - pickupLocation);
  }
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
