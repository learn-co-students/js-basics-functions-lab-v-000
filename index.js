function calculateVertical(start, end) {
  return Math.abs(end - start) * 264
}
function distanceFromHqInBlocks(blocks) {
  return Math.abs(blocks - 42)
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264
}

function distanceTravelledInFeet(start, end) {
  return calculateVertical(start, end)
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination) 
  
  switch (true) {
    case distance < 400: 
      return 0;
    case distance > 400 && distance < 2000:
      return distance * 0.02;
    case distance < 2500:
      return 25;
    case distance > 2500:
      return 'cannot travel that far';
  }
}