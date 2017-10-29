// Code your solution in this file!
function distanceFromHqInBlocks(arg)
{
  return Math.abs(arg-42)
}

function distanceFromHqInFeet(ending){
  return 264 * distanceFromHqInBlocks(ending)
}

function distanceTravelledInFeet(beginning,ending){
  return 264 * Math.abs(ending - beginning)
}

function calculatesFarePrice(start, destination){
  dis = distanceTravelledInFeet(start,destination)
  if (dis<=400){
    return 0
  }
  else if (400<dis && dis<2000){
    return 0.02 * dis
  }
  else if(2500>=dis && dis>2000){
    return 25
  }
  else{
    return 'cannot travel that far'
  }

}
