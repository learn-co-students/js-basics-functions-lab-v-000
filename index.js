// Code your solution in this file!
 function distanceFromHqInBlocks (someValue) {
   let headQuaters = 42;
   return Math.abs(headQuaters - someValue);
 }
 
 
 function distanceFromHqInFeet(dist) {
     val = distanceFromHqInBlocks(dist);
     return val*264;
 }
 
 
  function distanceTravelledInFeet(startingBlock,endingBlock) {
    return Math.abs(startingBlock-endingBlock)*264;
  }
  
  
  function calculatesFarePrice(start, destination) {
      tripInFeet =  distanceTravelledInFeet(start, destination);
      if (tripInFeet < 400) {
          return 0;
       } else if (400 < tripInFeet && tripInFeet < 2000) {
            return (tripInFeet-400)*0.02;
       } else if (2000 < tripInFeet && tripInFeet < 2500) {
            return 25;
       } else {
          return "cannot travel that far"; 
      }

  }