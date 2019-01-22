// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
  if(pickup > 42){
    return pickup - 42;
  } else {
    return 42 - pickup;
  }
}


function distanceFromHqInFeet(num){
  return distanceFromHqInBlocks(num) * 264
}


function distanceTravelledInFeet(pickup, dropOff){
  if (pickup > dropOff){
    return (pickup - dropOff) * 264;
  } else {
    return (dropOff - pickup)  * 264;
  }
}

function calculatesFarePrice (start, end) {
  const distance = distanceTravelledInFeet(start, end);

  if (distance < 400) {
    return 0;
  } else if (distance >= 400 && distance <= 2000) {
    return (distance - 400) * .02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far'
  }
}
