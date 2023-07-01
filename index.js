// Code your solution in this file!

// Returns the number of blocks from
//Scuber's headquarters to the pickup location.

function distanceFromHqInBlocks (pickupLocation) {
  //returns the number of blocks given a value
   if (pickupLocation > 42) {
     return pickupLocation - 42;
   }
    else {
      return 42 - pickupLocation;
   }
}


//Each block in Manhattan is 264 feet long.
function distanceFromHqInFeet(streetNumber) {

  let blocks = distanceFromHqInBlocks(streetNumber)
  return blocks * 264;
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(startblock , endblock){
   if (startblock > endblock) {
    return (startblock - endblock) * 264;
   }
  else {
    return (endblock - startblock) * 264;
  }
}



function calculatesFarePrice(startblock, endblock) {
 const feet = distanceTravelledInFeet(startblock, endblock)

  if (feet <= 400) {
    return 0;
  }
  if (feet > 400 && feet <= 2000) {
    return (feet - 400) * .02;
  }
  else if (feet >2000 && feet < 2500) {
    return 25;
  }
  else {
    return 'cannot travel that far';
  }
}
