// Code your solution in this file!

function distanceFromHqInBlocks (pickupLocation) {
   return Math.abs(pickupLocation - 42);
}

function distanceFromHqInFeet (pickupLocation) {
   return distanceFromHqInBlocks(pickupLocation) * 264
}

function distanceTravelledInFeet (start, destination) {
   return  Math.abs((destination - start)  * 264)
}

function calculatesFarePrice (start, destination) {
   const travelled = distanceTravelledInFeet(start, destination)
   if (travelled < 400)
      return 0
   else if (travelled >= 400 && travelled < 2000)
      return travelled * .02
   else if (travelled >= 2000 && travelled < 2500)
      return 25
   else
      return 'cannot travel that far'
}