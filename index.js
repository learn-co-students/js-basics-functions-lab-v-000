// Code your solution in this file!
function distanceFromHqInBlocks(destination){
 return Math.abs((42 - destination))
}

function distanceFromHqInFeet(destination){
 return Math.abs(distanceFromHqInBlocks(destination)) * 264
}

function distanceTravelledInFeet(starting,ending){
  return Math.abs(starting - ending) * 264
}

function calculatesFarePrice(starting, ending){
 let feet = distanceTravelledInFeet(starting, ending)
 if (feet <= 400){
  return 0;
 }else if(feet > 400 && feet <= 2000){
  return (feet - 400)* 0.02;
 }else if(feet > 2000 && feet <= 2500){
  return 25;
 }else {
  return 'cannot travel that far'
 }
}
