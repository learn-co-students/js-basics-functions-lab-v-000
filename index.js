// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    blocks = distance - 42
    return Math.abs(blocks)

}

 function distanceFromHqInFeet(distance) {
  distanceFromHqInBlocks(distance) === blocks
    feet = blocks * 264
    return Math.abs(feet)   

}
  function distanceTravelledInFeet(start, end) {
    blocks = start - end
    return Math.abs(blocks) * 264
  }

  function calculatesFarePrice(start, end) {
    if (distanceTravelledInFeet(start, end) > 2500){
    return 'cannot travel that far'
      }
    if (distanceTravelledInFeet(start, end) > 2000 ) {
      return 25
    }
  
    if (distanceTravelledInFeet(start, end) < 400) {
      return 0
    }
    if (distanceTravelledInFeet(start, end) < 2000) {
      return distanceTravelledInFeet(start,end) * .02
    }
  

    }

  