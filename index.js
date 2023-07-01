// Code your solution in this file!
function  distanceFromHqInBlocks(someNumber) {
  const dist = 42;

  let result;

  dist > someNumber ? result = 42 - someNumber : result = someNumber - 42
  return result;
}


function distanceFromHqInFeet(someNumber) {
  const feet = 264;

  let result;

  result = distanceFromHqInBlocks(someNumber) * feet;
  return result;
}

function distanceTravelledInFeet(startNumber, endNumber) {
  const feet = 264;

  let result;

  startNumber > endNumber ? result = (startNumber - endNumber) * feet : result = (endNumber - startNumber) * feet;
  return result;
}

function calculatesFarePrice(startNumber, endNumber) {
  const diff = distanceTravelledInFeet(startNumber, endNumber);
  let price;

  if (diff < 400) {
    price = diff * 0
    return price;
  } else if (diff > 400 && diff < 2000){
    price = (diff - 400) * 0.02
    return price;
  } else if (diff > 2000 && diff < 2500) {
    price = 25
    return price;
  } else {
    return "cannot travel that far"
  }
}
