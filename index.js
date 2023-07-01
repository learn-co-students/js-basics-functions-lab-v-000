// Code your solution in this file!


//  Returns the number of blocks from Scuber's headquarters to the pickup location.

  function distanceFromHqInBlocks(blocks){
       if (blocks < 42 ){
         return 42 - blocks 
       }else if (blocks > 42){
        return blocks - 42
       }
     }  
 

 

 function distanceFromHqInFeet (blocks) {
      return distanceFromHqInBlocks(blocks) * 264
      // #note a block = 264 feet long
 }

 function distanceTravelledInFeet (start, destination) {
  if (start < destination) {
    return (destination - start) * 264;
  } else {
    return (start - destination) * 264;
  }
}

const d=distanceTravelledInFeet(start,destination)

function calculatesFarePrice(start, destination) {
  
 
  if ((start - destination) * 264 > 2500 ){
    return 'cannot travel that far'
    }
 else if ((destination - start ) * 264 > 2000 ) {
     return 25
    }
 else if ( ((start - destination ) * 264) > 400 && ((start - destination ) * 264) < 2000) {
  //  javaScript don't have a between symbol so we had to do greater than or less than
     charge = ((start - destination)* 264) - 400
     return 0.02 * charge
    }
  else {
   return 0
    }
 
}


// //  Retur the number of feet from Scuber's headquarters to the pickup location.
// //  You can use your distanceFromHqInBlocks functiono help return the correct value here.
// //  Try something like this: