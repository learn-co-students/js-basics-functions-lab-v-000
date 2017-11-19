// Code your solution in this file!
function distanceFromHqInBlocks (street) {
  return Math.abs(street - 42);
}

function distanceFromHqInFeet (street) {
  return distanceFromHqInBlocks(street)*264;
}

function distanceTravelledInFeet (start, end) {
  return Math.abs((start - end)*264);
}

function calculatesFarePrice (start, destination) {
  let price = 0
  distance = distanceTravelledInFeet (start, destination)

  if (distance >= 400 && distance <= 2000){
    price = .02 * distance
  } else if (distance >= 2000 && distance < 2500){
    price = 25
  } else if (distance >= 2500) {
    price = 'cannot travel that far';
  }

 return price
}
