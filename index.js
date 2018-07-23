// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  const distance = Math.abs(42 - location);
  return distance;
}

function distanceFromHqInFeet(location) {
  const feet = distanceFromHqInBlocks(location)*264;
  return feet;
}

function distanceTravelledInFeet(start, end) {
  const distance = Math.abs(start - end) * 264
  return distance;
}

function calculatesFarePrice(start, destination) {
  let price;
  const distance = distanceTravelledInFeet(start, destination);

  if (distance > 2500) {
    price = 'cannot travel that far';
  } else if (distance > 2000) {
    price = 25;
  } else if (distance > 400) {
    price = ((distance - 400) * 2)/100;
    console.log(price);
  } else {
    price = 0;
  }
  return price;
}
