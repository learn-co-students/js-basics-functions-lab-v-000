// Code your solution in this file!

function distanceFromHqInBlocks(location){
  //returns a distance in blocks 
  //calculates distances below 42nd street
  let distance;
  if (location >= 42){
    distance = location - 42;
  }
  else {
    distance = 42 - location;
  }
   return distance;
}


function distanceFromHqInFeet(location) {
  //returns a distance in feet 
  //calculates distances below 42nd street
  let distance;
    if (location >= 42){
    distance = (location - 42) * 264 ;
  }
  else {
    distance = (42 - location) * 264;
  }
   return distance;
  
}


function distanceTravelledInFeet(start, destination) {
  let distance = Math.abs(start - destination);
	distanceInFeet = distance * 264;
	return distanceInFeet;
  
}

function calculatesFarePrice(start, destination) {
 
  let price;
  let distance;
  
   if (distanceTravelledInFeet(start,destination) < 400){
    price = 0;
  }
  else if (distanceTravelledInFeet(start,destination) > 2500){
    return 'cannot travel that far';
  }
  else if (distanceTravelledInFeet(start,destination) > 2000){
    price = 25
  }
  else {
    distance = distanceTravelledInFeet(start,destination) - 400;
    price = distance * .02
  }
   return price;

  
  //gives customers a free sample (first 400ft free)
  //if destination - start < 4000 return "It's free"
  //charges 2 cents per foot when total feet travelled is //between 400 and 2000 (remember the first 400 feet are free!)
  //if destination - start
  //charges 25 dollars for a distance over 2000 feet
  //no rides over 2500
  
}

