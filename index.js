// Code your solution in this file!
function distanceFromHqInBlocks (block){
  let result
  if (block > 34){
    result = block - 42
  }
  else {
    result = (block - 42) * -1
  }
  return result
}
function distanceFromHqInFeet(feet){
  let result = distanceFromHqInBlocks(feet);
  let joe = result * 264
  return joe
}
function distanceTravelledInFeet(start, end){
  let result
  if (end > start){
    result = (end - start) * 264
  }
  else {result = (start - end )*264}
  return result
}
function calculatesFarePrice(start, destination){
  let result = distanceTravelledInFeet(start, destination);
  if (result > 400 && result < 2000 ){
    console.log(result)
    result = (result - 400) * 0.02
    console.log(result)

  }
  else if (result > 2000 && result < 2500){
    result = 25
  }
  else if (result > 2500){
    result = "cannot travel that far"
  }
  else if (result <= 400){
    result = 0

  }
  return result
}
