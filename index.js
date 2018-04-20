// Code your solution in this file!
function distanceFromHqInBlocks (feet) {
   const hQ = 42;

   if (hQ > feet) {
     return hQ - feet;
   } else {
     return feet - hQ;
   }
}

function distanceFromHqInFeet (feet) {
  const blockInFeet = 264
  return distanceFromHqInBlocks(feet) * blockInFeet;
}

function distanceTravelledInFeet(distance1, distance2) {
  const blockInFeet = 264

  if (distance1 > distance2) {
    return (distance1 - distance2) * blockInFeet;
  } else {
    return (distance2 - distance1) * blockInFeet;
  }
}

function calculatesFarePrice(distance1, distance2) {
  if (distanceTravelledInFeet(distance1, distance2) <= 400) {
    return 0;
  } else if (401 < distanceTravelledInFeet(distance1, distance2) && distanceTravelledInFeet(distance1, distance2) < 2000) {
    return (distanceTravelledInFeet(distance1, distance2) - 400) * .02 ;
  } else if (1999 < distanceTravelledInFeet(distance1, distance2) && distanceTravelledInFeet(distance1, distance2) < 2500){
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
