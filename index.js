// Code your solution in this file!
function distanceFromHqInBlocks(dist) {
  return Math.abs(dist - 42);
}

function distanceFromHqInFeet(dist) {
  return distanceFromHqInBlocks(dist) * 264;
}

function distanceTravelledInFeet(l1, l2) {
  return Math.abs((l2 - l1) * 264);
}

function calculatesFarePrice(start, dest) {
  const dist = distanceTravelledInFeet(start, dest);
  let price;
  if (dist <= 400){
    price = 0
  } else if ( dist > 400 && dist <= 2000 ) {
    price = (dist - 400)* 0.02
  } else if (dist > 2000 && dist < 2500){
    price = 25
  } else if (dist > 2500){
    price = "cannot travel that far"
  }

  return price

}
