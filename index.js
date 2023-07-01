// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
  return Math.abs(42 - blocks)
}

function distanceFromHqInFeet(blocks){
  return Math.abs((distanceFromHqInBlocks(blocks))*264)
}

function distanceTravelledInFeet(first_block, second_block){
  return Math.abs(((first_block - second_block)*264))
}

function calculatesFarePrice(start, destination){
  let distance = Math.abs(((start - destination) * 264))
  if (distance < 400){
    return 0;
  } else if (distance * 264 > 400 && distance < 2000){
    return (distance - 400)*.02
  } else if (distance * 264 > 2000 && distance < 2500){
    return 25
  } else{
    return 'cannot travel that far'
  }
}
