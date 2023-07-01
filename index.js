// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  let hq = 42
  if (block < hq) {
    return (hq - block)
  } else if (block > hq) {
    return (hq - block) * -1
  } else {
    return 0
  }
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(start, end) {
  let distance = end - start
  if (distance < 0){
    return distance * -264
  } else {
    return distance * 264
  }
}

function calculatesFarePrice(start, end) {
  let distance = distanceTravelledInFeet(start, end)
  switch (true) {
    case (distance <= 400): return 0
    case (distance > 400 && distance <= 2000): return (distance - 400) * 0.02
    case (distance > 2500): return "cannot travel that far"
    case (distance > 2000): return 25
  }
}
