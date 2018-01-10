// Code your solution in this file!

const hq = 42

function distanceFromHqInBlocks(destination) {
    if (destination > 42){
        return destination - hq;
    } else { 
        return hq - destination
    }
    end 
}

function distanceFromHqInFeet(destination) {
    const blocks = distanceFromHqInBlocks(destination)
    return blocks * 264;
}

function distanceTravelledInFeet(destination, endPoint) {
     if (endPoint > destination) {
        const trip = endPoint - destination 
        return trip * 264;
     } else {
        const trip = destination - endPoint
        return trip * 264;
     }
     end 
    
}

function calculatesFarePrice(start, destination) {
    const fare_distance = distanceTravelledInFeet(start, destination) 
    
  if (fare_distance <= 400) {
    return 0;
  } else if (fare_distance > 400 && fare_distance <= 2000) {
    return .02 * fare_distance;
  } else if (fare_distance > 2000 && fare_distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
