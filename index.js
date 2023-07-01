function distanceFromHqInBlocks (street) {
  return Math.abs(street - 42);
}

function distanceFromHqInFeet (street) {
  const blocks = distanceFromHqInBlocks(street);

  return blocks*264;
}


function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination)*264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400)*0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else if (distance > 2500) {
    return 'cannot travel that far';
  }

  // if distance <= 400, free
  // if distance > 400 && distance <= 2000, price = (distance - 400)*0.02
  // if distance > 2000 && distance <= 2500, price = flat fare
  // if distance > 2500, return 'cannot travel that far'

}
