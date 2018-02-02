// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber){
   return Math.abs(42 - streetNumber)
 }

 function distanceFromHqInFeet(streetNumber){
   return distanceFromHqInBlocks(streetNumber) * 264
 }


 function distanceTravelledInFeet(start, destination){
   return Math.abs(start - destination)*264
 }

 function calculatesFarePrice(start, destination){
   let distance = distanceTravelledInFeet(start, destination)
   if (distance < 400){
     return 0
   }else if (distance < 2000){
     return 0.02*distance
   }else if (distance < 2500){
     return 25
   }else{
     return 'cannot travel that far'
   }
 }
