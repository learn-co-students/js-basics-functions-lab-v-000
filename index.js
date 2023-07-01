// Code your solution in this file!

function distanceFromHqInBlocks(destination) {
<<<<<<< HEAD
  return Math.abs(destination - 42)
=======
  return destination - 42
>>>>>>> a4397904f431cd0237aa00990d190b0ebfe27e61
}

function distanceFromHqInFeet(destination) {
  return distanceFromHqInBlocks(destination) * 264
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
<<<<<<< HEAD
  return Math.abs(endingBlock - startingBlock) * 264
=======
  return (endingBlock - startingBlock) * 264
>>>>>>> a4397904f431cd0237aa00990d190b0ebfe27e61
}

function calculatesFarePrice(startingBlock, endingBlock) {
  let distance = distanceTravelledInFeet(startingBlock, endingBlock)

<<<<<<< HEAD
  if (distance < 399) {
    return 0
  } else if (distance > 400 && distance < 1999) {
    return (distance - 400) * .02
  } else if (distance > 2000 && distance < 2499) {
=======
  if distance < 399 {
    return 0
  } else if distance > 400 && distance < 1999 {
    return (distance - 400) * .02
  } else if distance > 2000 && distance < 2499 {
>>>>>>> a4397904f431cd0237aa00990d190b0ebfe27e61
    return 25
  } else
    return "cannot travel that far"
  }
<<<<<<< HEAD
=======
}
>>>>>>> a4397904f431cd0237aa00990d190b0ebfe27e61
