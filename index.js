// Code your solution in this file!

function distanceFromHqInBlocks(number){
  if (number > 42){
    return number - 42
  } else {
    return 42 - number
  }
}

function distanceFromHqInFeet(number){
let blocks = distanceFromHqInBlocks(number);
return blocks * 264
}

function distanceTravelledInFeet(start,end){
  let blocks = 0;
  if (start > end){
    blocks = start - end;
  } else {
    blocks = end - start
  }
  return blocks * 264
}

function calculatesFarePrice(start, destination){
  if (distanceTravelledInFeet(start,destination) < 400){
      price = 0
  } else if (distanceTravelledInFeet(start, destination) <= 2000) {
    price = distanceTravelledInFeet(start,destination) * 0.02

  } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500){
    price = 25
  } else {
    price = "cannot travel that far"
  }
  return price

}
