// Code your solution in this file!
const hqBlock = 42
const distanceByFeet = 264

function distanceFromHqInBlocks(block) {
   if (hqBlock > block) {
    return hqBlock - block
   } else if (hqBlock < block) {
    return block - hqBlock
   }
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264
}

 function distanceTravelledInFeet(start, end) {
  if (start > end) {
    return (start - end) * distanceByFeet
  } else if (start < end) {
    return (end - start) * distanceByFeet
 }
}


 function calculatesFarePrice(start, destination) {
    let price = 0
    let pricePerFoot = .02 
    let distance = distanceTravelledInFeet(start, destination)
    
    if (distance < 400) {
      return price
    } else if (distance > 400 && distance <= 2000) {
      return pricePerFoot * distance
    } else if (distance > 2000 && distance < 2500) {
      return pricePerFoot = 25
    } else if (distance > 2500) {
      return 'cannot travel that far'
    }
 }