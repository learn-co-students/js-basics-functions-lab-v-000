// Code your solution in this file!
 function calculateVertical(start, end) {
   return Math.abs(end - start) * 264
 }

 function distanceFromHqInBlocks(end) {
   return Math.abs(end - 42)
 }

 function distanceFromHqInFeet(end) {
   return distanceFromHqInBlocks(end) * 264
 }

 function distanceTravelledInFeet(start, end) {
   return calculateVertical(start, end)
 }

 function calculatesFarePrice(start, end) {
   let distance = distanceTravelledInFeet(start, end)
   if (distance <= 400) {
     return 0
   } else if (distance <= 2000) {
     return distance * .02
   } else if (distance <= 2500) {
     return 25
   } else {
     return 'cannot travel that far'
   }
 }
