// Code your solution in this file!

function distanceFromHqInBlocks(currentStreet){
  console.log("In first function")
  return Math.abs(42 - currentStreet);
}


function distanceFromHqInFeet(currentStreet){
  return distanceFromHqInBlocks(currentStreet) * 264;
}

function distanceTravelledInFeet (start, destination){
  return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
  let dist = distanceTravelledInFeet(start, destination);
  if (dist < 400){
    return 0
  } else if(dist > 400 && dist < 2000 ){
    return dist * 0.02;
  } else if (dist > 2000 && dist < 2500){
    return 25;
  } else{
    return ("cannot travel that far");
  }
}
