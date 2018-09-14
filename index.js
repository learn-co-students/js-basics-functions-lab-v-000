// Code your solution in this file!
function distanceFromHqInBlocks(distance){
 return  Math.abs(distance - 42);
}


function distanceFromHqInFeet(feet){
return distanceFromHqInBlocks(feet) * 264
}


function distanceTravelledInFeet(distance, feet){
return Math.abs((feet - distance) * 264);
}

function calculatesFarePrice(start, destination){
let num = distanceTravelledInFeet(start, destination);
     if(num < 400){
       return 0
     } else if (num > 400 && num < 2000){
       return 2.56
     } else if (num > 2000 && num < 2500){
     return 25} else {
       return 'cannot travel that far';
     }
}
