function distanceFromHqInBlocks(pickupLocation) {
  return (pickupLocation > 42) ? (pickupLocation - 42) : (42 - pickupLocation);
}


function distanceFromHqInFeet(pickupLocation) {
  return (distanceFromHqInBlocks(pickupLocation) * 264);
}


function distanceTravelledInFeet(start, destination) {
  return (start > destination) ? ((start - destination) * 264) : ((destination - start) * 264);
}


function calculatesFarePrice(start, destination) {

  let distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
      return 0;
  }

  if (distance >400 && distance <=2000) {
      return (distance > 400) ? ((distance - 400)*.02) : ((400 - distance)*.02);
    }

  if (distance > 2000 && distance < 2500) {
    return 25;
  }

  if (distance >= 2500) {
    return "cannot travel that far";
  }

}
