// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
  return Math.abs(pickup - 42)
}

function blocksToFeet(blocks){
  return blocks * 264
}

function distanceFromHqInFeet(pickup){
  return blocksToFeet(distanceFromHqInBlocks(pickup))
}

function distanceTravelledInFeet(start, end){
  return blocksToFeet(Math.abs(start - end))
}

function calculatesFarePrice(start, destination){
  const distance = distanceTravelledInFeet(start, destination)
  let price;
  if (distance <= 400) {
    price = 0 }
  else if  (distance <= 2000){
    price = (distance -400) * .02
  }
  else if (distance <= 2500){
    price = 25
  }
    else {
      price = "cannot travel that far"
    }
    return price
  }
