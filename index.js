// Code your solution in this file!
let hq = 42;

function distanceFromHqInBlocks (pickupLocation) {
  //returns the number of blocks given a value
  return Math.abs(pickupLocation - 42)
}

function distanceFromHqInFeet (pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation)* 264;
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet (pickupLocation, dropoffLocation) {
  //returns the number of blocks given a value
  return (Math.abs(dropoffLocation - pickupLocation)* 264);
}


function calculatesFarePrice (pickupLocation, dropoffLocation) {
  const distance = distanceTravelledInFeet (pickupLocation, dropoffLocation)

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25
  } else {
    return 'cannot travel that far';
  }
  //returns the number of blocks given a value
}

//  Given the same starting and ending block as the previous test (hint hint),
// return the fare for the customer. The first four hundred feet are free. For
//a distance between 400 and 2000 feet, the price is 2 cents per foot (not
//including 400, which are free!). Then Scuber charges a flat fare for a
//distance over 2000 feet and under 2500 feet. Finally, Scuber does not allow
// any rides over 2500 feet - the function returns 'cannot travel that far' if
//a ride over 2500 feet is requested.
