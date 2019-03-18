function distanceFromHqInBlocks(someValue) {
  let result
    if (someValue > 42) {
      result =  Math.floor(Math.random() + someValue - 42)
    }
    else if  (someValue < 42){
      result = Math.floor(Math.random() + 42 - someValue)
    }
      return result
}

function distanceFromHqInFeet(someValue) {
  let result
    result = distanceFromHqInBlocks(someValue) * 264
  return result

}

function distanceTravelledInFeet(someValue, someValue2){
  let result
    if(someValue < someValue2) {
    result = distanceFromHqInFeet(someValue2) - distanceFromHqInFeet(someValue)
  }
  else if(someValue > someValue2) {
    result = distanceFromHqInFeet(someValue2) - distanceFromHqInFeet(someValue)
  }
    return result
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  }
  else if (400 < distance && distance <= 2000) {
    return .02 * (distance - 400);
  }
  else if (distance > 2000 && distance < 2500) {
    return 25;
  }
  else {
    return 'cannot travel that far';
  }
}
