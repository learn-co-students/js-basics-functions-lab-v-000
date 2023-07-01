// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  return Math.abs(someValue - 42);
}

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, finish) {
  var distanceInBlock = Math.abs(finish - start);
  var distanceInFeet = distanceInBlock * 264;
  return distanceInFeet;
}

function calculatesFarePrice(start, destination) {
  var distance = Math.abs(destination - start);
  var distanceInFeet = distance * 264;
  if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    var price = ((distanceInFeet - 400) * 2) / 100;
    return price;
  } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
    var price = 25;
    return price;
  } else {
    return "cannot travel that far";
  }
}
