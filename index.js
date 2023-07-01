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
    const distance = distanceTravelledInFeet(start, finish)
    if (distance < 400) {
      return 0;
    } else if (distance <= 2000) {
      return distance *.02;
    } else if (distance < 2500){
      return 25;
    } else {
      return 'cannot travel that far';
    }
   };