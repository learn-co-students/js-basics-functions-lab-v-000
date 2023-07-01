// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation){
  return  Math.abs(pickUpLocation - 42)
}


function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance) * 264
}


function distanceTravelledInFeet(startLocation, endLocation){
     (Math.abs(endLocation - startLocation) * 264)
  return (Math.abs(endLocation - startLocation) * 264)
}


function calculatesFarePrice(startLocation, endLocation){
  const distance = distanceTravelledInFeet(startLocation, endLocation)
  if (distance < 400){
    return 0;
  }
  else if (distance > 400 && distance < 2001){
    return (distance - 400) * 0.02;
  }
  else if (distance > 2000 && distance < 2500){
    return 25;
  }
  else if (distance > 2500){
   return "cannot travel that far";
 }

}
