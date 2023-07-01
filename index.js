// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    let result;
    
    if (distance >= 42) {
        result = distance - 42;
    } else {
        result = 42 - distance;
    }
    return result;
}

function distanceFromHqInFeet(endpoint) {
    let resultinfeet; 
    return resultinfeet = distanceFromHqInBlocks(endpoint) * 264;
    // return resultinfeet
}

function distanceTravelledInFeet(a, b) {
  let result; 
  
//   if (a > b){
//       result = (a - b) * 264
//   } else {
//       result = (b - a) * 264
//   }
//     return result;
  a > b ? (result = (a - b) * 264) : (result = (b - a) * 264)
  return result;
}

function calculatesFarePrice(start, destination) {
    let response;
    let distance = distanceTravelledInFeet(start, destination);

    if (distance >= 2500) {
        response = "cannot travel that far"
    } else if (distance >= 2000) {
        response = 25;
    } else if (distance > 400) {
        response = (distance - 400) * .02;
    } else if (distance <= 400) {
        response = 0;
    }
    return response;
}