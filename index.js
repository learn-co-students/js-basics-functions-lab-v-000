function distanceFromHqInBlocks(street) {
  let distance;
   distance = street - 42;
   return Math.abs(distance);
}


function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264;
}


function distanceTravelledInFeet(num1, num2) {
  let blocks;
  blocks = Math.abs(num2-num1);
  return blocks * 264;
}


function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance >= 2500) {
    return 'cannot travel that far';
  } else if (400 < distance && distance < 2000) {
    return (distance - 400) * .02;
  } else if (2000 < distance && distance < 2500) {
    return  25;
  }

}
