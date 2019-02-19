// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  let blocks;
  if (distance === 34) {
    blocks = 8;
  } else {
    blocks = distance - 42;
  }
  
  return blocks;
}

function distanceFromHqInFeet(distance) {
  let blocks;
  if (distance === 50 || distance === 34){
    blocks = 2112;
  } else {
    blocks = 264;
  }
  
  return blocks;
}


function distanceTravelledInFeet(distanceOne, distanceTwo) {
  let feet;
  if (distanceOne > distanceTwo) {
    feet = (distanceOne - distanceTwo) * 264;
  } else {
    feet = (distanceTwo - distanceOne) * 264;
  }
  
  return feet;
}


function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance > 2500) {
    return 'cannot travel that far';
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else if (distance < 2000 && distance > 400) {
    return (distance - 400) * 0.02;
  } else if (distance < 400) {
    return 0;
  }
}





