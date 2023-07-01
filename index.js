let feetInBlock = 264
let hq = 42

function distanceTravelledInFeet(start, destination){
  return Math.abs(start - destination) * feetInBlock
}

function distanceFromHqInBlocks(location){
  return Math.abs(location - hq);
}

function distanceFromHqInFeet(location){
  return distanceTravelledInFeet(location, hq)
}

function calculatesFarePrice(start, destination){
  const feetTraveled = distanceTravelledInFeet(start, destination)
  if (feetTraveled < 400){
    return 0
  }else if(feetTraveled < 2000){
    return (feetTraveled - 400) / 50
  }else if(feetTraveled < 2500){
    return 25
  }else{
    return 'cannot travel that far'
  }
}
