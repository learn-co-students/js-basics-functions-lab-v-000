// Code your solution in this file!
function distanceFromHqInBlocks (blocks) {
  answer = 42 - blocks
  if (answer < 0) {
    return answer * -1
  }
  else {
    return answer
  }
}

function distanceFromHqInFeet (blocks) {
  return distanceFromHqInBlocks(blocks) * 264
}

function distanceTravelledInFeet (start, end) {
  answer = (start - end) * 264
  if (answer < 0) {
    return answer * -1
  }
  else {
    return answer
  }
}

function calculatesFarePrice(start, destination) {
  answer = distanceTravelledInFeet (start, destination)
  // return answer
  if (answer <= 400) {
    return 0
  }
  else if (answer > 2500) {
    return "cannot travel that far"
  }
  else if (answer >= 2000) {
    return 25
  }
  else {
    return .02 * (answer-400)
  }

}
