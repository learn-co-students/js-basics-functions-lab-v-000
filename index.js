// Code your solution in this file!

function distanceFromHqInBlocks(distance){
  let result;
  distance > 42 ? result = distance - 42 : result = 42 - distance;

  //condition ? expression1 : expression2;

  return result;
}

function distanceFromHqInFeet(distance){
  let block = 264;
  let result;

  return distanceFromHqInBlocks(distance) * block;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  let block = 264;
  let result;

  endBlock > startBlock ? result = (endBlock - startBlock) * block : result = (startBlock - endBlock) * block;

  return result;
}

function calculatesFarePrice(start, destination){
  let distanceInFeet = distanceTravelledInFeet(start, destination);
  if (distanceInFeet <= 400) {
  		return 0;
  	} else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
  		return (distanceInFeet - 400) * 0.02;
  	} else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
  		return 25;
  	} else {
  		return 'cannot travel that far';
  	}
}
