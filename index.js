let blocks = 0
let feet = 0
let feetTravelled = 0
let cents = 0

function distanceFromHqInBlocks(pickup){
  if (pickup >= 42){
    blocks = pickup - 42
  } else {
    blocks = 42 - pickup 
  }
  return blocks
}
 

function distanceFromHqInFeet(arg){
  feet = distanceFromHqInBlocks(arg) * 264
  return feet
}
 

function distanceTravelledInFeet(a, b){
  if (a > b){
    feetTravelled = (a - b) * 264
  } else {
    feetTravelled = (b - a) * 264
  }
  return feetTravelled
}

function calculatesFarePrice(start, destination){
  distanceTravelledInFeet(start, destination)
  if (feetTravelled < 400) {
    return 0
  } else if (feetTravelled > 400 && feetTravelled < 2000) {
    return feetTravelled * .02;
  } else if (feetTravelled > 2000 && feetTravelled < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}