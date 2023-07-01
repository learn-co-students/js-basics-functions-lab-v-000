function distanceFromHqInBlocks(blockNumber) {
    return Math.abs(blockNumber - 42);
}

function distanceFromHqInFeet(blockNumber){
  return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet(departureBlock, arrivalBlock){
  return Math.abs(arrivalBlock - departureBlock) * 264
}

function calculatesFarePrice (departureBlock, arrivalBlock){
  //return distanceTravelledInFeet(departureBlock, arrivalBlock)
  const distanceAfter400Feet = distanceTravelledInFeet(departureBlock, arrivalBlock)

  if (distanceAfter400Feet <= 400) {
   return 0;
 }
 else if (distanceAfter400Feet > 400 && distanceAfter400Feet <= 2000) {
   let amount = distanceAfter400Feet - 400;
   return (amount * 0.02);
 }
 else if (distanceAfter400Feet > 2000 && distanceAfter400Feet < 2500) {
   return 25;
 }
 else {
   return "cannot travel that far";


  //switch (distanceAfter400Feet) {
  //case 'distanceAfter400Feet <= 400':
    //return 0;
    //break;
  //case 'distanceAfter400Feet > 400 && distanceAfter400Feet < 2000':
    //return (distanceAfter400Feet - 400) * 0.02
    //break;
  //case 'distanceAfter400Feet > 2000 && distanceAfter400Feet < 2500':
    //return 25;
    //break;
  //case 'distanceAfter400Feet < 2500':
    //return "cannot travel that far";
    //break;
}

}

// Code your solution in this file!
