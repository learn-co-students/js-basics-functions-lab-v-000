// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
  if (someValue <= 42) {
    return 42 - someValue;
  }
  else {
    return someValue - 42;
  }
}

function distanceFromHqInFeet (someValue) {
  if (someValue <= 42) {
    return (42 - someValue)*264;
  }
  else {
    return (someValue - 42)*264;
  }
}

function distanceTravelledInFeet (valueA, valueB) {
  if (valueA <= valueB) {
    return (valueB - valueA)*264;
  }
  else {
    return (valueA - valueB)*264;
  }
}

function calculatesFarePrice(start, destination) {

  let result, distance, farePrice, distanceInFeet;
  distanceInFeet  = distanceTravelledInFeet(start, destination)


     if (distanceInFeet < 400) {
      result = 0;
    } else if (distanceInFeet >= 400 && distanceInFeet <= 2000) {
      distance = distanceInFeet - 400;
      farePrice = distance * 0.02;
      result = farePrice;
    } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
        result = 25;
    } else if (distanceInFeet > 2500) {
      result = 'cannot travel that far';
    } else {

     }
    return result
}
