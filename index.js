// Code your solution in this file!
distanceFromHqInBlocks = (block) => {
  let answer = (42-block)
  if(answer < 0) {
    return answer * -1
  } else {
    return answer
  }
}

distanceFromHqInFeet = (distance) => {
  return distanceFromHqInBlocks(distance) *264
}

distanceTravelledInFeet = (beginning, ending) => {
  let answer = (ending-beginning)*264
  if(answer < 0) {
    return answer * -1
  } else {
    return answer
  }

}

calculatesFarePrice = (beginning, ending) => {
  let distance = distanceTravelledInFeet(beginning, ending)
  console.log("test", distance)
  switch(true) {
    case (distance < 400):
      console.log("distance", distance)
      return 0
      break;
    case distance > 400 && distance < 2000:
      return distance *0.02
      break;
    case distance > 2000 && distance < 2500:
      return 25
      break;
    case distance > 2500:
      return 'cannot travel that far'
      break;
    default:
      break;
  }
}
