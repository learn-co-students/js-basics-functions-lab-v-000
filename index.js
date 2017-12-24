// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  if (street > 42) {
    return street - 42;
  } else {
    return 42 - street;
  }
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(start, destination) {
  if (start < destination) {
     const blocks = destination - start; 
     return blocks * 264;
   } else {
     const blocks = start - destination;
     return blocks * 264;
   }
}

function calculatesFarePrice(start, destination) {
  const feetTravelled = distanceTravelledInFeet(start, destination);
  if (feetTravelled < 400) {
    return 0;
  } else if (feetTravelled >= 400 && feetTravelled <= 2000) {
    return feetTravelled * 0.02;
  } else if (feetTravelled > 2000 && feetTravelled < 2500) {
    return 25;
  } else if (feetTravelled > 2500) {
    return "cannot travel that far"
  }
}
