// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
  if(blocks > 42){
    return blocks - 42;
  }
  else {
    return 42 - blocks;
  }
      }

  function distanceFromHqInFeet(blocks) {
    const distance = distanceFromHqInBlocks(blocks)
    return distance * 264
  }

  function distanceTravelledInFeet(start, end){
    if (start < end) {
      return (end - start) *264;
    }
    else {
      return (start - end) *264;
    }
  }

  function calculatesFarePrice(start, end){
    const feet = distanceTravelledInFeet(start, end)
    const location = feet - 400;
    switch(true){
      case feet > 2500:
        return 'cannot travel that far'
          break
      case feet > 2000:
        return 25;
          break;
      case feet <= 400:
        return 0;
          break;
      case feet > 400:
        return .02 * location
            break;
      }
  }
