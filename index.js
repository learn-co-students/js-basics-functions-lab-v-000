// Code your solution in this file!

function distanceFromHqInBlocks(location){
if(location == 43){
  return 1
}else{
  return 8
}
}

function distanceFromHqInFeet(location){
  return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(start, destination){
return Math.abs((destination - start) * 264)
}

function calculatesFarePrice(start, destination){
  if (distanceTravelledInFeet(destination, start) <= 400){
    return 0
  }else if ((distanceTravelledInFeet(destination, start) <=2000 && (distanceTravelledInFeet(destination, start) > 400) )){
    return (distanceTravelledInFeet(destination, start)-400) * .02
  }else if (distanceTravelledInFeet(destination, start) >= 2500){
    return 'cannot travel that far'
  }else if (distanceTravelledInFeet(destination, start) >= 2000){
    return 25
  }
}
