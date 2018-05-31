// Code your solution in this file!

const Hq = 42

function distanceFromHqInBlocks(block) {
  if (block >= Hq) {
    return block - Hq;
  } else {
    return Hq - block;
  }
}

function distanceFromHqInFeet(block) {
  return (264 * distanceFromHqInBlocks(block))
}

function distanceTravelledInFeet(start, destination) {
  if (start >= destination) {
    return (start - destination) * 264
  } else {
   return (destination - start) * 264
  }
} 

function calculatesFarePrice(start, destination) {
  distance = distanceTravelledInFeet(start, destination)
  if (distance > 2500) {
    return "cannot travel that far";
  } else if (distance <= 400) {
   return 0
  } else {
    price = (distance - 400) * 0.02
    if (distance > 2000) {
      price = 25
    }
    return price 
  }
}