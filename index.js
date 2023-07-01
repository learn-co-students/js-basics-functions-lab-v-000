// Code your solution in this file!
function distanceFromHqInBlocks (num) {
   return Math.abs(num - 42)
  }

function distanceFromHqInFeet(num){
    return distanceFromHqInBlocks(num) * 264
}

function distanceTravelledInFeet(start, end){
    return Math.abs(end - start) * 264
}

function calculatesFarePrice(start, end){
    const distance = distanceTravelledInFeet(start, end)

    if (distance <= 400) {
        return 0;
      } else if (distance > 400 && distance <= 2000) {
        return .02 * (distance-400);
      } else if (distance > 2000 && distance < 2500) {
        return 25;
      } else {
        return 'cannot travel that far';
      }


}
