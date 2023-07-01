// Code your solution in this file!


function distanceFromHqInBlocks(loc) {
let blocks
  if (loc >= 42) {
    blocks = (loc - 42)
  } else {
    blocks = (42 - loc)
  }
  return blocks
}

function distanceFromHqInFeet(loc) {
  return (distanceFromHqInBlocks(loc) * 264)
}

function distanceTravelledInFeet(ori, dest) {
  let distance
  if (ori >= dest) {
    distance = ((ori - dest) * 264)
  } else {
    distance = ((dest - ori) * 264)
  }
  return distance
}

function calculatesFarePrice(ori, dest) {
  let price
  if (distanceTravelledInFeet(ori, dest) <= 400) {
    price = 0
  } else if (distanceTravelledInFeet(ori, dest) <= 2000) {
    price = ((distanceTravelledInFeet(ori, dest) - 400) * .02)
  } else if (distanceTravelledInFeet(ori, dest) <= 2500) {
    price = 25
  } else {
    return 'cannot travel that far'
  }
  return price
}