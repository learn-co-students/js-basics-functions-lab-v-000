// Code your solution in this file!
function distanceFromHqInBlocks(n) {
  if (n < 43) {
    return (43 - n) - 1
  } else {
    return (n - 43) + 1
  }
}

function distanceFromHqInFeet(n) {
  return distanceFromHqInBlocks(n) * 264
}


function distanceTravelledInFeet(a, b) {
  if(a > b) {
    return (a - b) * 264
  } else {
    return (b - a) * 264
  }
}

function calculatesFarePrice(s, d) {
  let dis = distanceTravelledInFeet(s, d)
  if(dis < 400) {
    return 0
  }
  if(dis > 400 && dis < 2000) {
    return dis * 0.02
  }
  if(dis > 2000 && dis < 2500) {
    return 25
  }
  if(dis >= 2500) {
    return 'cannot travel that far'
  }
}
