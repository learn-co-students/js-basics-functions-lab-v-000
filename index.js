// Code your solution in this file!

  function distanceFromHqInBlocks(street) {
    return Math.abs(street - 42)
  }

  function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street)*264
  }

  function distanceTravelledInFeet(start, end) {
    return Math.abs(end - start) * 264
  }

  function calculatesFarePrice(start, destination) {
    let feet = Math.abs(destination - start) * 264

    if (feet <= 400)
      return 0
    else if (feet > 400 && feet <= 2000)
      return  (feet * .02)
      else if (feet > 2000 && feet < 2500)
        return  (25)
    else
      return "cannot travel that far"


  }
