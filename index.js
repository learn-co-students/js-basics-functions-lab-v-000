// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation){
  
  return Math.abs(42-pickupLocation);
  
}

function distanceFromHqInFeet(pickupLocation){
  
  return distanceFromHqInBlocks(pickupLocation) * 264;
  
}

function distanceTravelledInFeet(pickupLocation, dropoffLocation){
  
  return Math.abs(pickupLocation - dropoffLocation) * 264;
  
}

function validFare(distance){
  
  if(distance > 2500){
    return false;
  }
    else{
      return true;
    }
}

function calculatesFarePrice(pickupLocation, dropoffLocation){
  
  const distance = distanceTravelledInFeet(pickupLocation, dropoffLocation);
  
  if (validFare(distance) === false){
    return 'cannot travel that far'; 
  }
  
    else if (distance < 400){
      return 0;
    }
    
    else if (distance > 400 && distance <= 2000) {
      return parseFloat((.02 * distance - 8).toFixed(2));
    }
    
    else {
      return 25; 
    }
}
