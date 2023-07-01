// Code your solution in this file!
function distanceFromHqInBlocks(n){
  let result = 42 - n;
  if (result < 0) {
    result *= -1
  }
  return result
}

function distanceFromHqInFeet(n){
  let x = distanceFromHqInBlocks(n) * 264;
  return x
}

function distanceTravelledInFeet(start, end){
  let result = (start - end) * 264;
  if (result < 0) {
    result *= -1
  }
  return result
}

function calculatesFarePrice(start,end){
  // 2 cents per foot
  let dist = distanceTravelledInFeet(start,end)
  if (dist <= 400){
    return 0
  }
  else if (dist <= 2000){
    let result = (dist - 400) * .02
    return result
  }
  else if (dist <= 2500){
    return 25
  }
  else {
    return 'cannot travel that far'
  }

}
