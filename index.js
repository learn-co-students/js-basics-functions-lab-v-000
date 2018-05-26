function distanceFromHqInBlocks(someStreet) {
  let distance
  if (someStreet > 42){
  distance = someStreet - 42; 
  }
  else {
    distance = 42 - someStreet ; 
  }
  return distance
}

function distanceFromHqInFeet(someStreet) {
  let feet 
  feet = distanceFromHqInBlocks(someStreet) * 264
  return feet
}

function distanceTravelledInFeet(a,b){
  let result 
  result =  264 * Math.abs(a - b) ;
  return result
}

function calculatesFarePrice(start, destination) {
  let result
  const range = distanceTravelledInFeet(start,destination)
  if (range < 400) {
    result = 0 ;
  }
  else if (range >= 400 && range <= 2500 ){
    result = (range-400 )* .02;
    if (range > 2000){
      result = 25
    }
  }
  else if (range > 2500) {
    result = 'cannot travel that far';
  }
  return result
}