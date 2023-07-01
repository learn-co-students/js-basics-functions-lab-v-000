// Code your solution in this file!
function distanceFromHqInBlocks(street){
  return Math.abs(street - 42);
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street)*264;
}

function distanceTravelledInFeet(departure, destination){
  return Math.abs(departure - destination) * 264;
}

function calculatesFarePrice(departure, destination){
  const dt = distanceTravelledInFeet(departure, destination)
  if (dt < 400){
    return 0;
  } else if (dt > 400 && dt <2000) {
    return dt*0.02;
  }  else if (dt > 2500){
    return "cannot travel that far"
  } else if (dt > 2000){
    return 25;
  }

}
