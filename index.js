function distanceFromHqInBlocks(pickupLocation){
  return Math.abs(pickupLocation - 42);
}

function distanceFromHqInFeet(pickupLocation){
  return distanceFromHqInBlocks(pickupLocation) * 264;
}

function distanceTravelledInFeet(a, b){
  return Math.abs((b-a)*264);
}

function calculatesFarePrice(a, b){
  let feet = distanceTravelledInFeet(a, b);
  if (feet <= 400){
    return 0;
  } else if (feet > 400 && feet <= 2000) {
    return (feet-400) * 0.02;
  } else if (feet > 2000 && feet <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
