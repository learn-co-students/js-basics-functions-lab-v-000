// Code your solution in this file!

function distanceFromHqInBlocks(loc) {
  const hq = 42;
  let blocks; 
  
  return Math.abs(loc - hq)
}


function distanceFromHqInFeet(loc) {
  let blocks = distanceFromHqInBlocks(loc)
  return blocks * 264
}


function distanceTravelledInFeet(start, destination) {
  let blocks = Math.abs(start - destination)
  return blocks * 264
}


function calculatesFarePrice(start, destination) {
  
  var feet = distanceTravelledInFeet(start, destination)

  if (feet <= 400) {
    return 0 
  } else if (feet > 400 && feet <= 2000) {
     return (.02 * (feet - 400))
  } else if ((feet > 2000) && (feet < 2500)){
     return 25
  } else {
      return 'cannot travel that far'
  } 
}

