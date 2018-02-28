// Code your solution in this file!
   function distanceFromHqInBlocks(street) {
    return Math.abs(street-42);
  }
   function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264;
   };

   function distanceTravelledInFeet(start, finish) {
    return Math.abs(distanceFromHqInFeet(start) - distanceFromHqInFeet(finish));
   };

   function calculatesFarePrice(start, finish) {
    if (distanceTravelledInFeet(start, finish) < 400) {
      return 0;
    } else if (distanceTravelledInFeet(start, finish) <= 2000) {
      return distanceTravelledInFeet(start, finish) *.02;
    } else if (distanceTravelledInFeet(start, finish) < 2500){
      return 25;
    } else {
      return 'cannot travel that far';
    }
   };