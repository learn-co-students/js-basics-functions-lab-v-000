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


function distanceTravelledInFeet() {
  
}
