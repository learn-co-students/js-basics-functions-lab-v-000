// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  return street > 42 ? street - 42 : 42 - street
}

function distanceFromHqInFeet(street) {
  blocks = distanceFromHqInBlocks(street)
  return blocks * 264
}

function distanceTravelledInFeet(start, end) {
  blocks = start < end ? end - start : start - end
  return blocks * 264
}

function calculatesFarePrice(start, end) {
  // given same start/end block, return fare for customer
  // < 100 ft = free
  // >400 && < 2000 = 2 cents per foot
  // > 2000 = flat fare
  // > 2500 = "cannot travel that far"
  feet = distanceTravelledInFeet(start, end)
  if(feet <= 400) {
    return 0
  } else if(feet > 400 && feet <= 2000) {
    return feet * 0.02
  } else if(feet > 2500) {
    return "cannot travel that far"
  } else if(feet > 2000) {
    return 25
  }
}
