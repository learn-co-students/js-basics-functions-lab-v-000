// Code your solution in this file!

const headquarters = 42


function distanceFromHqInBlocks(distance){
  let value = Math.abs(distance - headquarters)
  return value
}

function distanceFromHqInFeet(feet){
  let newValue = distanceFromHqInBlocks(feet) * 264
  return newValue

}

function distanceTravelledInFeet(first, second){
  let newValue = Math.abs(first-second) * 264
  return newValue

}

function calculatesFarePrice(first,second){
  let price;
  let newValue = distanceTravelledInFeet(first,second)
  if (newValue >2500){
    return "cannot travel that far"
  }else if (newValue >2000){
    price = 25
    return price
  }else if (newValue >=400){
    price = newValue * .02
    return price
  }else if (newValue <400){
    price = 0
    return price
  }

}
