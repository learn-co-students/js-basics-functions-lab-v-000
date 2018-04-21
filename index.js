let hq = 42;
function distanceFromHqInBlocks(origin) {
  return Math.abs(hq-origin)
}


function distanceFromHqInFeet(origin) {
  return distanceFromHqInBlocks(origin) * 264
}

function distanceTravelledInFeet(origin, destination) {
  return Math.abs(origin - destination) * 264
}

function calculatesFarePrice(origin, destination) {
  let fare
  const distance = distanceTravelledInFeet(origin, destination)
  switch(true) {
    case (distance <= 400):
      fare = 0
      return fare
    case (distance > 400 && distance <= 2000):
      fare = (distance - 400)*.02
      return fare
    case (distance > 2000 && distance < 2500):
      fare = 25
      return fare
    case (distance > 2500):
      fare = "cannot travel that far"
      return fare
  }
}
