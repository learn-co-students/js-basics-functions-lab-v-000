// Code your solution in this file!
function distanceFromHqInBlocks(block) {
   if (block > 42) {
    return block - 42
  } else {
    return 42 - block
  }

}

function distanceFromHqInFeet(block) {
   blocks = distanceFromHqInBlocks(block)
   return blocks * 264
}

function distanceTravelledInFeet(one, two) {
  if (one > two) {
   blocks = one - two
 } else {
   blocks = two - one
 }
 return blocks * 264
}

function calculatesFarePrice(start, destination) {
  distance = distanceTravelledInFeet(start, destination)
  if (distance <= 400) {
    return 0
  } else if (distance > 400 && distance <= 2000) {
    fare = distance * 2
    return parseFloat((fare/100).toFixed( 2 ))
  } else if (distance > 2000 && distance < 2500) {
     return 25
  } else {
    return "cannot travel that far"
  }
}
