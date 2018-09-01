// Code your solution in this file!

function distanceFromHqInBlocks(distance){
  const hq = 42
  if (distance >= hq) {
    return distance - hq
  } else {
    return hq - distance
  }
}

function distanceFromHqInFeet(distance){
  const hq = 42
  const convert = 264
  if (distance >= hq) {
    return (distance - hq) * convert
  } else {
    return (hq - distance) * convert
  }
}

function distanceTravelledInFeet(start_block, end_block){
  const convert = 264
  let distance = (end_block - start_block) * convert
  if (end_block > start_block) {
    return distance
  } else if (start_block > end_block) {
    return distance *= -1
  }
}
