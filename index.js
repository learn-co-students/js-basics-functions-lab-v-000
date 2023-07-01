// Code your solution in this file!
function distanceFromHqInBlocks(destination) {
  const headOffice = 42;
  if (destination < headOffice) {
    return headOffice - destination;
  }
  else {
    return destination - headOffice;
  }
}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264;
}


function distanceTravelledInFeet(start, stop) {
  if (start < stop) {
    return (stop - start) * 264;
  }
  else {
    return (start - stop) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  let fare;
  if (distance < 400) {
    fare = 0;
  }
  else if (distance <= 2000) {
    fare = distance * 0.02;
  }
  else if (distance <= 2500) {
    fare = 25;
  }
  else {
    fare = 'cannot travel that far';
  }
  return fare;
 }
// gives customers a free sample ‣
// ReferenceError: calculatesFarePrice is not defined
//     at Context.<anonymous> (test/indexTest.js:48:7)
// charges 2 cents per foot when total feet travelled is between 400 and 2000 in example below is 528 ‣
// ReferenceError: calculatesFarePrice is not defined
//     at Context.<anonymous> (test/indexTest.js:53:7)
// charges 25 dollars for a distance over 2000 feet ‣
// ReferenceError: calculatesFarePrice is not defined
//     at Context.<anonymous> (test/indexTest.js:57:7)
// does not allow rides over 2500 feet
