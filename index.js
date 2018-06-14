// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  let distance;

  if (street > 42) {
    distance = street - 42
  } else if (street < 42) {
    distance = 42 - street
  }
  return distance
}

function distanceFromHqInFeet(street) {
  let distance = distanceFromHqInBlocks(street) * 264
  return distance
}

function distanceTravelledInFeet(start, end) {
  let distance;

  if (start > end) {
    distance = (start - end) * 264
  } else if (start < end) {
    distance = (end - start) * 264
  }

  return distance
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination)
  let price;
  if (distance < 400) {
    price = 0
  } else if (distance >= 400 && distance <= 2000) {
    price = (distance - 400) * .02;
  } else if (distance > 2000 && distance <= 2500) {
    price = 25
  } else if (distance > 2500) {
    price = 'cannot travel that far'
  }
  return price;
}
