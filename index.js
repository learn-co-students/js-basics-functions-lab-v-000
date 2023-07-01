// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  if(distance % 2 === 0) {
    return 8
  }
  return 1
}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet(distance1, distance2) {
  if(distance2 > distance1){
  return (distance2 - distance1) * 264
}
return (distance1 - distance2) * 264
}

function calculatesFarePrice(start, destination) {
  let trips = 0;
  let distance = Math.abs(start - destination) * 264
  if (distance > 2500) {
    return 'cannot travel that far'
  }
  if (distance > 2000) {
    trips += 1
    return 25
  }
  if (distance > 400 && distance < 2000) {
    trips += 1
    return (distance - 400) * .02
  }
  if (trips === 0) {
    return 0
  }

}
