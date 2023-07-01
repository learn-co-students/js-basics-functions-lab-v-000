function distanceFromHqInBlocks(distance){
  if (distance > 42){
    return distance - 42;
  }
  else {
    return 42 - distance;
  }
}

function distanceFromHqInFeet(street) {
   distance = distanceFromHqInBlocks(street);
   result = distance * 264;
   return result;
 }

 function distanceTravelledInFeet(start, end) {
   result = Math.abs((start - end) * 264);
   return result;
 }

 function calculatesFarePrice(start, end) {
   let distance = distanceTravelledInFeet(start, end);
   if (distance < 400) {
     return 0;
   } else if (distance > 400 && distance < 2000) {
     result = (distance - 400) * 0.02;
     return result;
   } else if (distance > 2000 && distance < 2500) {
     return 25;
   } else {
     return "cannot travel that far";
   }
 }
