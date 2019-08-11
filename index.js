// Code your solution in this file!

function distanceFromHqInBlocks (street) {
    //returns the number of blocks given a value
    let result;
    result = street - 42;
    return Math.abs(result);
  }
   
function distanceFromHqInFeet (street) {
    return distanceFromHqInBlocks(street) * 264;
    
    // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    //the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

function distanceTravelledInFeet(start, destination) {
  let result;
  result = ((destination - start) * 264);
  return Math.abs(result);

}
 
function calculatesFarePrice(start, destination) {
  
    let result;
   result = (distanceTravelledInFeet(start, destination));
 
if (result <= 400) {
    result = 0;
} else if (result > 400 && result <= 2000) {
    result = ((result - 400) * .02);
} else if (result > 2000 && result < 2500){
    result = 25;
} else if (result > 2500) {
    result = 'cannot travel that far'
}
return result;

}