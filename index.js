// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
  let blocks = 42 - pickup
  return Math.abs(blocks);
}

 function distanceFromHqInFeet(pickup) {
   return distanceFromHqInBlocks(pickup) * 264;
 }

function distanceTravelledInFeet(pointA, pointB) {
  let blocks = pointA - pointB
  return Math.abs(blocks) * 264
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination)

  if (distance <= 400) {
    return 0
  } else if (distance > 400 && distance < 2000){
      return (distance * 2) / 100
  } else if (distance > 2000 && distance < 2500){
      return 25
  } else if (distance > 2500) {
      return 'cannot travel that far'
  }

}
