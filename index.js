// Code your solution in this file!
function distanceTravelledInFeet(startingBlock, endingBlock) {
  let result;

  startingBlock > endingBlock ? (result = (startingBlock - endingBlock) * 264) : (result = (endingBlock - startingBlock) * 264)
  return result;
}

function distanceFromHqInBlocks(distance) {
  let result;

  if (distance >= 42) {
    result = distance - 42
  } else {
    result = 42 - distance
  }
  return result;
}


function distanceFromHqInFeet(end) {
  let resultFeet;

  return resultFeet = distanceFromHqInBlocks(end) * 264;
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function calculatesFarePrice(start, end) {
  let distance = distanceTravelledInFeet(start, end);
  let response;
  if (distance <= 400) {
   response = 0
 } else if  (distance > 400 && distance <= 2000) {
     response = (distance - 400)* .02
  } else if (distance >= 2000 && distance < 2500) {
    response = 25
}  else {
  return response = 'cannot travel that far'}
  return response
  }
