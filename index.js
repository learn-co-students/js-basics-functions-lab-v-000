// Code your solution in this file!

function distanceFromHqInBlocks(num) {
    return Math.abs(num - 42)
}

function distanceFromHqInFeet(num) {
   return distanceFromHqInBlocks(num) * 264
}

function distanceTravelledInFeet(start, end) {
    return Math.abs(start - end)*264
}

function calculatesFarePrice(start, destination) {
   let num =  distanceTravelledInFeet(start, destination)

   if (num < 400) {
       return 0
   } else if (400 < num && num < 2000) {
       return (num - 400)*.02
   } else if (num > 2000 && num < 2500) {
       return 25
   } else {
       return 'cannot travel that far'
   }
}