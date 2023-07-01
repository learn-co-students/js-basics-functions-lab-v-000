// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return Math.abs(block - 42)

}

function distanceFromHqInFeet(block) {
return distanceFromHqInBlocks(block) * 264

}

function distanceTravelledInFeet(start, finish) {
  return Math.abs(264 * (start - finish))

}

function calculatesFarePrice(start, finish) {

  let trip = distanceTravelledInFeet(start, finish)
  if (trip <= 400){
  return 0;
} else if (trip > 400 && trip <= 2000) {
  return .02 * (trip - 400);
} else if (trip > 2000 && trip < 2500) {
  return 25;
} else  {
  return "cannot travel that far";
}


}
