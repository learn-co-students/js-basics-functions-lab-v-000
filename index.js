// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  let result;
  result = Math.abs(42 - location)
  return result
};

function distanceFromHqInFeet(location) {
  let result;
  result = (distanceFromHqInBlocks(location) * 264)
  return result;
};

function distanceTravelledInFeet(location1, location2) {
  let result;
  result = Math.abs(location1 - location2) * 264
  return result;
};

function calculatesFarePrice(start, destination) {
  let price;
  let distance;
  distance = distanceTravelledInFeet(start, destination);
  if (distance < 400) {
    price = 0;
  } else if (400 <= distance && distance <= 2000) {
    price = (distance - 400) * .02
  } else if (distance > 2500) {
    return "cannot travel that far"
  } else {
    price = 25
  }
  return price;
};
