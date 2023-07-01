// Code your solution in this file!
  function distanceFromHqInBlocks(street) {
    return Math.abs(street - 42)
  }

  function distanceFromHqInFeet(street) {
    return Math.abs(street - 42)*264

  }

  function distanceTravelledInFeet(x,y) {
    return Math.abs(x-y)*264
  }

  function calculatesFarePrice(start,end) {
    if (distanceTravelledInFeet(start,end) <= 400) {
      return 0
    } else if  (distanceTravelledInFeet(start,end) >= 2500) {
      return 'cannot travel that far'
    }
    else if (distanceTravelledInFeet(start,end) >= 2000) {
      return 25}
      else{
    return (distanceTravelledInFeet(start,end) - 400)*.02}
  }
